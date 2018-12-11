using System;

namespace DiceRoller
{
    class Program
    {



        static int RollDice(int numberOfSides)
        {
            var result =  new Random().Next(numberOfSides) + 1;
            // Side effects
            return result;
        }

        static void Main(string[] args)
        {

            /* const myFunc = () => {
                askjlasjdf
                a
                as
                as
                asdf

            } 
            // Func<int, int, string> mySum = (x, y) => {
            //     return (x + y).ToString();
            // };
            */


            Console.WriteLine("Hello, let us roll some dice!");
            var running = true;

            while (running)
            {
                // ask the user, what kind of dice to roll, how many sides
                System.Console.WriteLine("What size dice do you want to roll? or type 'q' to quit");

                // Read and convert to a number
                var input = Console.ReadLine();
                if (input == "q")
                {
                    // stop the loop
                    running = false;
                }
                else
                {
                    var sides = int.Parse(input);

                    // print out the result
                    System.Console.WriteLine($"You rolled a {RollDice(sides)}");
                }
            }
            System.Console.WriteLine("Okay, goodbye!");

        }
    }
}
