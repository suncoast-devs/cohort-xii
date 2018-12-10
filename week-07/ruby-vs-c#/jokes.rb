require 'sinatra'
require 'sinatra/json'

get '/' do
  jokes = [
    "What makes a joke funny, timing",
    "I had a dream last night about a muffler, woke up exhausted",
    "Why do Java programmers need glasses, they don't C#"
  ]

  random_joke = jokes.sample

  json joke: random_joke
end

get '/about' do
  "Made by Gavin"
end