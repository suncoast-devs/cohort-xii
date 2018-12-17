# Enumerable library

# These are equivalent
names = %w{Gavin Jason Toby Toni JasonPerry}
p names

# Go through the names
names.each do |name|
  p name
end

names.each_with_index do |the_value, the_index|
  p the_value
  p the_index
end

new_names = names.map do |name|
  # this block needs to return something
  name.upcase
end
p names
p new_names

# Jim Weirich rule
#
# If a block returns a value, or has a side effect, we
# use the { } style and put it on one line
new_names = names.map { |name| name.upcase }
p new_names

# map! is the same as map, but MODIFIES the original array
# instead of giving us a new one!
students = %w{Toby Shea Chris}
students.map! { |name| name.upcase }
p students

# Lets find all of the names that are more than 4 letters long
# JavaScript: filter
# Ruby: select

# JavaScript:   longNames = names.filter(name => name.length > 4)
#               longNames = names.filter(name => {
#                             return name.length > 4
#                           })
long_names = names.select { |name| name.length > 4 }

# Count
p names.count { |name| name.length > 4 }

# Max (alphabetic)
p names.max

# Max (but ordered differently, here based on length)
p names.max_by { |name| name.length }

scores = [42, 11, 100, 98, 76]
p scores.max
p scores.min

# Looping though hashes
person = {
  name: "Gavin",
  score: 42,
  favorite_color: "blue",
  car: "Tesla"
}

person.each do |key, value|
  puts "The #{key} for the person"
end

new_names = names.select { |name| name.length > 4 }.map { |name| name.upcase }
p new_names












