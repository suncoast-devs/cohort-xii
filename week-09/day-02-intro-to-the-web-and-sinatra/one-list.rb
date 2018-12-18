require 'sinatra'
require 'sinatra/reloader' if development?
require 'sinatra/json'
require 'active_record'
require 'rack/cors'

ActiveRecord::Base.establish_connection(
  adapter: "postgresql",
  database: "one-list"
)

# Allow anyone to access our API via a browser
use Rack::Cors do |config|
  config.allow do |allow|
    allow.origins '*'
    allow.resource '*'
  end
end

class Item < ActiveRecord::Base
end

# Get all the items
get '/items' do
  all_items = Item.all.order(:id)

  json  all_items
end

# Get one item
get '/items/:id' do
  item_from_database = Item.find(params["id"])

  json   item: item_from_database
end

# Creating a item
post '/items' do
  #
  # our input body will look like this:
  #
  # {
  #   item: {
  #     text: "Item here"
  #   }
  # }
  #

  # Gavin to research this, is there a better way?
  data = JSON.parse(request.body.read)

  item_params = data["item"]

  new_item= Item.create(item_params)

  json item: new_item
end

# Updating a item
put '/items/:id' do
  # Gavin to research this, is there a better way?
  data = JSON.parse(request.body.read)

  item_params = data["item"]

  # Find the item by it's ID
  existing_item = Item.find(params["id"])
 
  # Update it with the new parameters from item_params
  existing_item.update(item_params)

  json item: existing_items
end

# Delete a item
delete '/items/:id' do
  deleting_item = Item.find(params["id"])

  deleting_item.destroy

  json item: deleting_item
end
