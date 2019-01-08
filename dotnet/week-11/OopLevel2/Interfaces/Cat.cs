using System;

namespace OopLevel2
{
    class Cat:ISpeak
    {
        public string Name { get; set; }
        
        public DateTime Birthday { get; set; }

        public string CoatColor { get; set; }


        public void SayGreeting()
        {
            Console.WriteLine("Meow Meow");
        }

    }
}