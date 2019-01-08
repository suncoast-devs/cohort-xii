using System;

namespace OopLevel2
{
    class Person : ISpeak
    {
        public string Name { get; set; }

        public DateTime Birthday { get; set; }

        public string Jobs { get; set; }

        public void SayGreeting()
        {
            Console.WriteLine("Hello! I am a person");
        }

    }
}