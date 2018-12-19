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
#     - [ ] Create a `PUT /Animal/{animal}` endpoint that adds 1 to the count of times seen for that animal
#     - [ ] Create a `DELETE /Animal/{animal}` endpoint that deletes that animal from the database

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









