name = "Gavin"

until name.empty?
  puts "Hello #{name}"

  puts "Give me another name"
  name = gets.chomp
end