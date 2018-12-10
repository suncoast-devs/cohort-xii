using System;

namespace HelloWorld
{
    class Program
    {

        //function signature 3 things
        // [returnType] Name([params])

        static int Sum(int x, int y)
        {
            return x + y;
        }

        static string Sum(string greeting, string name)
        {
            return $"{greeting}, {name}";
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Console
                .WriteLine("Hello new .NET Students");

            // types 
            // let total = 4 + 6;
            // total = "the total is 10"  

            // primitive types: int, double, decimal, float, bool, char 

            // variables
            int total;
            total = 100;

            var myTotal = 100.0;// inferacing the type

            System.Console.WriteLine("Hello, what is your name?");
            var name = Console.ReadLine();

            System.Console.WriteLine(Sum("Hello", name));
            System.Console.WriteLine(Sum("Aloha", name));
            System.Console.WriteLine(Sum("Good Morning", name));


            System.Console.WriteLine("Your name is " + name);

            System.Console.WriteLine("what is your favorite number?");
            var number = Console.ReadLine();

            System.Console.WriteLine("You favorite number is " + number);

            // add +5 to favorate number
            // convert from string to int
            var numberAsInt = Decimal.Parse(number);
            numberAsInt += 5;
            // print out the new result
            System.Console.WriteLine("My favorite number is: " + numberAsInt);

            // conversion / casting
            var x = (char)numberAsInt;
            System.Console.WriteLine($"you number as a char is {x}.");

            var hashtag = '#';


            // if/then
            /* if (some bool condition) 
            {
            } 
            else if (some other bool condition) 
            {   
            }
            else 
            {
            }
                */

            // if the number equals 42, special message
            // else if the number is greater than 100, but less that 150
            // else if the number is greater than 150 
            // else a default message
            if (numberAsInt == 42)
            {
                System.Console.WriteLine("You get the meaning of life!");
            }
            else if (numberAsInt >= 100 && numberAsInt <= 150)
            {
                System.Console.WriteLine("thats a good range");
            }
            else if (numberAsInt > 150)
            {
                System.Console.WriteLine("You like big numbers");
            }
            else
            {
                System.Console.WriteLine("good number, nice and small");
            }


            // loops
            // for
            for (int i = 0; i < 10; i++)
            {
                System.Console.WriteLine($"The i == {i}");
            }


            // whiles
            var counter = 0;
            while (counter <= 10)
            {
                System.Console.WriteLine("Ha ha");
                counter++;
            }

            // functions/methods



        }
    }
}
