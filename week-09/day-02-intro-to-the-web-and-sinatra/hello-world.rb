require 'sinatra'
require 'sinatra/reloader' if development?
require 'sinatra/json'
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: "postgresql",
  database: "jokes"
)

class Joke < ActiveRecord::Base
end


get '/' do
  json ["hello", "world"]
end

get '/joke' do
  # params is a variable (secret, it is really a method...)
  # that is a hash
  #
  # I can lookup a parameter and get it's value

  # Lookup the URL parameter called 'number' and turn this into an integer
  number = params["number"].to_i

  json        joke: JOKES[number]
end

# Get all the jokes
get '/jokes' do
  all_jokes = Joke.all.order(:id)

  json  all_jokes
end

# Get one joke
get '/jokes/:id' do
  joke_from_database = Joke.find(params["id"])

  json   joke: joke_from_database

  # json({ joke: JOKES[id] })
  #
  # More minimal syntax below
  #json joke: JOKES[id]
end

# Creating a joke
post '/jokes' do
  #
  # our input body will look like this:
  #
  # {
  #   joke: {
  #     punchline: "joke here"
  #   }
  # }
  #

  # Gavin to research this, is there a better way?
  data = JSON.parse(request.body.read)

  joke_params = data["joke"]

  # Example:
  #   Joke.create(punchline: "joke here")
  new_joke = Joke.create(joke_params)

  json joke: new_joke
end

# Updating a joke
put '/jokes/:id' do
  # Gavin to research this, is there a better way?
  data = JSON.parse(request.body.read)

  joke_params = data["joke"]

  # Find the joke by it's ID
  existing_joke = Joke.find(params["id"])
 
  # Update it with the new parameters from joke_params
  existing_joke.update(joke_params)

  json joke: existing_joke
end

# Delete a joke
delete '/jokes/:id' do
  deleting_joke = Joke.find(params["id"])

  deleting_joke.destroy

  json joke: deleting_joke
end
