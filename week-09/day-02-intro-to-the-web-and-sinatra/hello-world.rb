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

get '/jokes' do
  all_jokes = Joke.all

  json    jokes: all_jokes
end

get '/jokes/:id' do

  joke_from_database = Joke.find(params["id"])

  json   joke: joke_from_database

  # json({ joke: JOKES[id] })
  #
  # More minimal syntax below
  #json joke: JOKES[id]
end

