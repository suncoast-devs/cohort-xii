using System;

namespace OopLevel2
{
    public class Parrot : ISpeak
    {
        public int WingSpan { get; set; }
        public void SayGreeting()
        {
           Console.WriteLine("I would like a cracker");
           
        }
    }
}