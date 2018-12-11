# Make a dog class
class Dog
  attr_accessor :name, :breed
  # Shortcut for:
  # def name
  #   @name
  # end
  # def breed
  #   @breed
  # end

  # attr_writer :age
  # Shortcut for:
  # def age=(new_age)
  #   @age = new_age
  # end

  attr_accessor :age, :weight
  # Shortcut for:
  # attr_reader :age
  # attr_writer :age
  # attr_reader :weight
  # attr_writer :weight

  # JavaScript: constructor
  def initialize(the_dog_name, the_breed, age)
    # This the method that gets called
    # whenever we make a new instance
    # of Dog

    # JavaScript
    # this.name = 'Riley'

    # Use an idea called instance variables
    @name = the_dog_name

    @breed = the_breed

    @age = age

    # this variable goes away when the method is over
    # But @name sticks around
    # name = 'Riley'
  end

  def speak
    puts "The dog named #{name} that is a #{breed} says: Woof"
  end
end

# JavaScript:  const riley = new Dog
riley = Dog.new('Riley', "Dachsund", 3)
roscoe = Dog.new('Roscoe', "Dachsund", 7)

p riley
p roscoe

riley.speak
roscoe.speak

p riley.name
p roscoe.name

puts "Riley is #{riley.age} years old"

# riley.age       =          4
riley.age = 5

puts "Riley is #{riley.age} years old"

p riley.weight
riley.weight  =   12
p riley.weight 


# JavaScript: class GoodDog extends Dog
#
# GoodDog is a CHILD class of Dog
# Dog is the PARENT class of GoodDog
#
# GoodDog can do everything a Dog can do
class GoodDog < Dog
  def treat
    puts "#{name} says: Mmmmmm, thanks!"
  end

  def speak
    puts "I am a good dog!"
  end
end

kali = GoodDog.new("Kali", "Pitbull", 9)
p kali
kali.treat
kali.speak




