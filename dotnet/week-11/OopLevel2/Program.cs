using System;
using System.Collections.Generic;

namespace OopLevel2
{
    class Program
    {


        public class Singer
        {

            private ISpeak _singer; 

            public Singer(ISpeak speaker)
            {
                this._singer = speaker;
            }

            public void Sing()
            {
                Console.WriteLine($"I am singing!!!");
                _singer.SayGreeting();
                Console.WriteLine("La la lal");       
            }
        }


        static void Main(string[] args)
        {

            var bobby = new Person();
            var whiskers = new Cat();
            var stormShadow = new Dog();

            // bobby.SayGreeting();
            // whiskers.SayGreeting();
            // stormShadow.SayGreeting();

            var family = new List<ISpeak>{
                bobby,
                whiskers,
                stormShadow
            };

            foreach (var member in family)
            {
                member.SayGreeting();
            }


            var concert = new Singer(bobby);

            var petShow = new Singer();

            



            Console.WriteLine("Hello World!");
        }
    }
}
