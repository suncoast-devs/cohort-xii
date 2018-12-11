name = "Gavin"

p name

score = 42

p score

scores = [42, 100, 43, 12, 99]

p scores

# Hash (dictionary -- JavaScript: object)

person = {
  "name" => "Gavin",
  "score" => 42,
  98 => "our score"
}

# In ruby, this doesn't work: person.name
# What does work is this:

p person
p person["name"]
p person["score"]
p person[98]
p person["98"]

# Using the contents of a variable as our lookup
key = "score"
p person[key]

# What happens when we lookup a key that doesn't exist
# Looking up a key that doesn't exist gives nil
p person["nopes"]
p person["nopes"] || "default value"

person = {
  "name" => "Gavin",
  "score" => 42,
  "nopes" => nil
}

# This will print "default value" even though
# that key exists. Boooo...
p person["nopes"] || "default value"

# Fetch is an alternative way to lookup
p person.fetch("score")

# What if fetch with a key that is missing
p person.fetch("this doesn't exist", "default value")
p person.fetch("nopes", "default value")

# Adding to a hash
puts "What is in our hash?"
p person

person["phone"] = "867-5309"

puts "Now our hash has"
p person

# Change a value in a hash
person["nopes"] = "Yups"
p person

# Lets talk about keys for a second
person = {
  "name" => "Gavin",
  "score" => 42
}

# Symbols
# they look like this         :name
#                             :score

person = {
  :name => "Gavin",
  :score => 42
}


puts "What is the person name using symbols"
p person[:name]

person = {
  name: "Gavin",  # equivalent to :name => "Gavin"
  score: 42       # equivalent to :score => 42
}

puts "What does our hash look like now that we use symbols"
p person
p person[:score]

# But all is not well

person = {
  name: "Gavin",
  score: 42,
  scores: [42, 100, 98, 44, 55],
  phone_number: "867-5309",
  98 => "Hmmm",
  details: {
    favorite_color: "blue",
    car: "Tesla",
    school: "SDG"
  }
}

# JavaScripts: person.details.favorite_color
p person[:details][:favorite_color]