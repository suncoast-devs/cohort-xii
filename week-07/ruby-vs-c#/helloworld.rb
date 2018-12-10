require 'active_support/all'

# console.log("Hello, world")

# sayHello = (name, score) => { console.log(name) }

name = "Gavin"
score = 42
scores = [100, 42, 66]

scores << name

puts "Your scores are #{scores}"
exit

puts "Hello, world, #{name} your score is #{score}"

puts scores.max
puts scores.sum
puts scores.sum / scores.length

# scores.forEach(score => {
#   console.log(score)
# })

puts "The scores are:"
scores.each do |score|
  puts score
end

# let doubleScores = scores.map(score => 2 * score)

double_scores = scores.map { |score| 2 * score }

puts "The double scores are"
double_scores.each do |score|
  puts score
end

puts "Going through arrays two at a time"
scores = [ 100, 42, 55, 11, 9, 1004, 55, 11 ]

sums = scores.each_slice(3).map do |numbers|
  numbers.sum
end

puts "The sums are #{sums}"

def hello(name, score)
  puts "hello #{name} your score is #{score} and the length of your name is #{name.length}"
end

ruby_tuesday = proc {
  puts "This is printed 10 times"
}

3.times(&ruby_tuesday)
10.times(&ruby_tuesday)

class Array
  def sum
    42
  end

  def average
    sum / length
  end
end

puts "The sum is:"
puts scores.sum

puts 5.days.ago
puts 5.weeks.from_now
puts (3.5).hours.from_now

puts [1,2,3].sum
puts [4,5,6].sum

