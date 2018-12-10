# let name = 'Gavin'

name = "Gavin"

# console.log(name)

puts(name)

score = 42

puts(score)

# message = `${name}, your score is ${score}`

message = "#{name}, your score is #{score}"

puts(message)

# Array literals, just like in JavaScript

# scores = [100, 42, 60, 12, 0, 99 ]

scores = [100, 42, 60, 12, 0, 99]

# Prints the array as a string, but one element per line
puts(scores)

# Programmer's print, gives us a programmer friendly output
p(scores)

# Programmer print a string shows the quotes
p(message)

# Adding things to an array

# JavaScript: scores.push(98)
scores.push(98)
p(scores)

scores << 75
p(scores)

# Parenthesis in many places are optional
p scores

puts name

# JavaScript
#
# const hello = () => {
#    console.log('hello!')
#}
def hello
  puts "hello!"
end

# JavaScript
#
# Calls the method
# hello()
#
# Refers to the method itself, does not call it
#
# hello
hello

# JavaScript
# const greet = name => {
#   console.log(`Hello ${name}`)
# }

# greet('Gavin')
# greet('Gavin")
# greet(name)

def greet(name)
  puts "Hello #{name}"
end

greet("Gavin")
greet(name)

# JavaScript
# const doubleNumber = number => {
#    return number * 2
# }

def double_number(number)
  number * 2
end

# JavaScript rule about variables we use once, still appies here

puts "Doubling 85 is #{double_number(85)}"
puts "Triple 85 is #{85 * 3}"

puts "The name is #{name}"

# JavaScript

# const uppercaseName = name.toUpperCase()
uppercase_name = name.upcase

puts "The uppercase version is #{uppercase_name}"

puts "But, name is still #{name}"

# Many methods in Ruby have a _mutating_ version

# This makes the value inside of the varible name uppercase
name.upcase!

puts "Now, if we look at name we get #{name}"

# JavaScript

# const isEven = number => {
#    return number % 2 === 0
# }
def even?(number)
  number % 2 == 0
end

if even?(4)
  puts "Yup, it is even"
end

if !even?(5)
  puts "Yup, it is odd"
end

# unless is like a backwards if, only do the part when the condition is FALSE
unless even?(5)
  puts "Uh huh, it is odd"
end


def red?(color)
  color == "red"
end

# These two are the same
car = "blue"
if !red?(car)
  puts "Nope, not red"
end
unless red?(car)
  puts "Nope, not red"
end

# How many things in an array
p scores
p scores.length
p scores.size
p scores.count

# Loops!
index = 0
while index < scores.length
  # Do work here
  score = scores[index]

  puts "The number at index #{index} is #{score}"

  index += 1
end

# Print a banner for the user
puts "What is your name?"

# GET a STRING (gets) from the user
# CHOMP off the newline
# put the result in the variable name
name = gets.chomp

# Names is a blank array
names = []

# Append name to the 'names' array
# Alternatively: names.push(name)
names << name

# Programmer print what is in name
if name == "Toni"
  puts "*" * 40
  puts "\n" * 5
  puts "hello, Toni!\nYou can play the game!"
end

until name.empty?
  puts "Give me another name"
  name = gets.chomp
  unless name.empty?
    names << name
    puts "Thanks #{name}"
  end
end

puts "You gave me #{names.count} names"
puts "They are:"

# JavaScript
# names.forEach(name => {
#   console.log(name)
# })
names.each do |name|
  puts "> #{name}"
end





#