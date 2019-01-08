using System;
using System.Threading.Tasks;

namespace AsyncAwaitExample
{
    class Program
    {




        public static async Task TacoTuesday()
        {
            // Do some long running task (talk to a database, API request, read/write file)
        }

        public static async Task<int> SumNumbersAsync(int x, int y)
        {   
            return x + y;
        }

        static async Task Main(string[] args)
        {

            await TacoTuesday();


            var sum = await SumNumbersAsync(4, 5);

            Console.WriteLine("Hello World!");
        }
    }
}
