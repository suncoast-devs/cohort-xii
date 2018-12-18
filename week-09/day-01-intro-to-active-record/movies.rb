require 'pg'
require 'active_record'

ActiveRecord::Base.logger = Logger.new(STDOUT)
ActiveRecord::Base.establish_connection(
  adapter: "postgresql",
  database: "movies"
)

class Actor < ActiveRecord::Base
  has_many :cast_members
  has_many :movies, through: :cast_members
end

class Movie < ActiveRecord::Base
  has_many :cast_members
  has_many :actors, through: :cast_members
  has_many :ratings
end

class Actor < ActiveRecord::Base
end

class Rating < ActiveRecord::Base
  has_many :movies
end

class CastMember < ActiveRecord::Base
  belongs_to :movie
  belongs_to :actor
end

def	json_print data
  puts JSON.pretty_generate(data.as_json)
end

def prompt
  print "> "
  answer = gets.chomp!

  case answer
  when "l"
    json_print Movie.all
  when /\d+/
    json_print Movie.find(answer)
  when "s"
    puts "Give me a movie to search for."
    print "> "
    query = gets.chomp
    json_print Movie.where("title ILIKE ?", "%#{query}%")
  when "q"
    puts "Goodbye."
    exit
  when "c"
    print "title > "
    title = gets.chomp
    print "director > "
    director = gets.chomp
    print "year > "
    year = gets.chomp.to_i
    print "genre > "
    genre = gets.chomp

    movie = Movie.create(title: title, primary_director: director, year_released: year, genre: genre)
    json_print movie
  else
    puts "I don't know that command"
  end
end

while true
  prompt
end