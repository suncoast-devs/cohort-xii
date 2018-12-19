# * [x] Your database will be named called `SafariVacation` / `safari_vacation`
#     * [x] This will have 1 table called `SeenAnimals` / `seen_animals` that has the following columns
#         - `Id` / `id` (int)
#         - `Species` /  `species` (string)
#         - `CountOfTimesSeen` / `count_of_times_seen` (int)
#         - `LocationOfLastSeen` / `location_of_last_seen` (string)
# 
# CREATE TABLE seen_animals (id SERIAL PRIMARY KEY, species text, count_of_times_seen INT, location_of_last_seen TEXT);
#
# * [ ] Your API should have the following endpoints:
#     - [ ] Create `GET /Animals` Endpoint that returns all animals you have seen
#     - [ ] Create `GET /Search?species=lion` that returns all animals where the species name contains the species parameter
#     - [ ] Create a `POST /Animal` endpoints that adds a animal to the database. This should take a JSON body
#     - [ ] Create a `GET /Animal/{location}` that returns animals of only that location
#     - [ ] Create a `PUT /Animal/{id}` endpoint that adds 1 to the count of times seen for that animal (given by id)
#     - [ ] Create a `DELETE /Animal/{id}` endpoint that deletes that animal id from the database

# This will allow us to write a sinatra app that has API routes
require 'sinatra'
# This allows us to respond with JSON data
require 'sinatra/json'
# This allows us to have Sinatra automatically reload our code
require 'sinatra/reloader' if development?
# Requires the ActiveRecord code to work with the database
require 'active_record'

# Connects ActiveRecord to our safari database
ActiveRecord::Base.establish_connection(
  adapter: "postgresql",
  database: "safari_vacation"
)

# Make a class that allows us to work with the database.
class SeenAnimal < ActiveRecord::Base
end

# Create `GET /Animals` Endpoint that returns all animals you have seen
get '/Animals' do
  # Direct way, with no local variables
  json SeenAnimal.all

  # Retuns an object with ONE key, called `seen_animals` whose value is the array of all the animals
  # all_the_animals_from_the_database = SeenAnimal.all
  # json all_the_animals_from_the_database
end

# Create `GET /Search?species=lion` that returns all animals where the species name contains the species parameter
get '/Search' do
  json SeenAnimal.where('species LIKE ?', "%#{params["species"]}%")
end

# Create a `POST /Animal` endpoints that adds a animal to the database. This should take a JSON body
# JSON body looks like:
# {
#    "seen_animal": {
#      "species": "Duck",
#      "count_of_times_seen": 10,
#      "location_of_last_seen": "Kitchen"
#    }
# }
post '/Animal' do
  # JSON.parse - Turn the string into an object. Take string that looks like JSON and turn it into a hash we can use
  # request.body.read - Reads the body of the request, that is where the API user will put their data (e.g. when you are in postman that is where you typed your JSON)
  animal_json_object = JSON.parse(request.body.read)

  # Pass the hash we get back by accessing "seen_animal" to SeenAnimal.create which will make a new record in the database
  animal_active_record_object = SeenAnimal.create(animal_json_object["seen_animal"])

  # Make the repsonse the JSON version of that new record in the database
  json animal_active_record_object
end

# Create a `GET /Animal/{location}` that returns animals of only that location
get '/Animal/:location' do
  # the variable matching_animals will be an array of SeenAnimal objects
  # but only those WHERE
  # -- the column "location_of_last_seen" matches *exactly* the value in the variable `the_location_the_user_wants`
  # -- which is the parameter from the URL
  json SeenAnimal.where(location_of_last_seen: params["location"])
end

# Create a `PUT /Animal/{id}` endpoint that adds 1 to the count of times seen for that animal
put '/Animal/:id' do
  # Find the first animal in the database where the column `species` exactly matches what is inside the variable `species`
  # found_animal = SeenAnimal.find_by(species: params["species"])

  # new_count = found_animal.count_of_times_seen + 1

  # found_animal.update(count_of_times_seen: new_count)

  # json found_animal

  # Updates the matching animals (of which there are one) and update their count of times seen in one step
  SeenAnimal.where(id: params["id"]).update_all("count_of_times_seen = count_of_times_seen + 1")

  # Find the animal in the database with that id
  json SeenAnimal.find(params["id"])
end

# Create a `DELETE /Animal/{id}` endpoint that deletes that animal id from the database
delete '/Animal/:id' do
  found_animal = SeenAnimal.find(params["id"])

  found_animal.destroy

  json found_animal
end