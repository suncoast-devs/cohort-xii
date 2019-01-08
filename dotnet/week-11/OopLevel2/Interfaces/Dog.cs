using System;

namespace OopLevel2
{
    class Dog : ISpeak
    {
        public string Name { get; set; }

        public DateTime Birthday { get; set; }

        public string Breed { get; set; }


        public void SayGreeting()
        {
            Console.WriteLine("bark Bark!");
        }

    }
}