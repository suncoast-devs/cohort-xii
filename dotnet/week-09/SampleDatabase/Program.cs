using System;
using System.Linq;

namespace SampleDatabase
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var db = new TreeDatabaseContext();

            db.Trees.Add(new Trees
            {
                Name = "Pine",
                AverageAge = 110,
                AverageHeight = 125.4
            });


            var treeNames = db.Trees.Where(tree => tree.AverageAge > 100).Select(s => s.Name);

            treeNames.ToList().ForEach(Console.WriteLine);


        }
    }
}
