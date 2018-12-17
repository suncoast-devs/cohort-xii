using System;
using System.Collections.Generic;
using System.Linq;

namespace ClassesAndLinq
{
    class Program
    {
        static void Main(string[] args)
        {
            var board1 = new SurfBoard("Sarah")
            {
                Height = 6.5,
                Width = 4.5,
                Shape = "longboard",
                Material = "plastic",
                NumberOfFins = 4
            };

            var board2 = new SurfBoard("Butch")
            {
                Height = 4.5,
                Width = 4.5,
                Shape = "shortboard",
                Material = "plastic",
                NumberOfFins = 4
            };

            var board3 = new SurfBoard("Barton")
            {
                Height = 6.5,
                Width = 4.5,
                Shape = "longboard",
                Material = "plastic",
                NumberOfFins = 4
            };

            var board4 = new SurfBoard("Andy")
            {
                Height = 6.5,
                Width = 4.5,
                Shape = "longboard",
                Material = "carbon fiber",
                NumberOfFins = 4
            };

            var board5 = new SurfBoard("Jesse")
            {
                Height = 6.5,
                Width = 4.5,
                Shape = "longboard",
                Material = "plastic",
                NumberOfFins = 4
            };

            var board6 = new SurfBoard("Jesse")
            {
                Height = 4.5,
                Width = 4.5,
                Shape = "shortboard",
                Material = "wood",
                NumberOfFins = 4
            };

            var board7 = new SurfBoard("Leslie")
            {
                Height = 6.5,
                Width = 4.5,
                Shape = "longboard",
                Material = "plastic",
                NumberOfFins = 4
            };

            var board8 = new SurfBoard("Paul")
            {
                Height = 6.5,
                Width = 4.5,
                Shape = "longboard",
                Material = "carbon fiber",
                NumberOfFins = 4
            };


            // LINQ
            // Language INtergrated Query
            var surfBoards = new List<SurfBoard>
            {
                board1, board2, board3, board4, board5, board6, board7, board8
            };


            // map => Select
            var materials = surfBoards.Select(board => board.Material);
            var squareFootage = surfBoards.Select(board => board.Height * board.Width);
            var timeOfPurchased = surfBoards.Select(board =>
            {
                var hour = board.DatePurchased.Hour;
                return hour;
            });
            // filter => Where
            var longBoards = surfBoards.Where(w => w.Shape == "longboards");
            var has3fins = surfBoards.Where(w => w.NumberOfFins == 3);

            // reduce
            var totalFins = surfBoards.Aggregate(0, (acc, board) =>
            {
                acc += board.NumberOfFins;
                return acc;
            });

            // sum
            var sumOfFins = surfBoards.Sum(board => board.NumberOfFins);

            // Min/Max
            var longestBoard = surfBoards.Max(board => board.Height);
            var skinniestBoard = surfBoards.Min(board => board.Width);

            // All
            var areAllOwned = surfBoards.All(a => a.Owner != null);
            // Any
            var areAnyOwned = surfBoards.Any(a => a.Owner != null);

            if (areAllOwned)
            {
                System.Console.WriteLine("No boards for sale");
            }
            else
            {
                System.Console.WriteLine("Boards for sale");
            }

            // First / Single
            var sarahsBoard = surfBoards.FirstOrDefault(board => board.Owner == "James");
            if (sarahsBoard == null)
            {
                System.Console.WriteLine("Sarah's board is missing");
            }


            try
            {
                var jessseBoard = surfBoards.SingleOrDefault(s => s.Owner == "Jesse");
            }
            catch (System.InvalidOperationException)
            {
                System.Console.WriteLine("Jesse has more than one board!!!");
            }

            // Count 
            var countOfPlasticSurfBoards = surfBoards.Count(board => board.Material == "plastic");

            // Distinct
            var distinctsMaterials = surfBoards.Select(s => s.Material).Distinct();

            foreach (var material in distinctsMaterials)
            {
                System.Console.WriteLine(material);   
            }
            // Order
            var orderedByLength = surfBoards.OrderByDescending(board => board.Height); 

            // Skip
            // Take
            var selected = surfBoards.Take(3).Skip(2).Take(3);

            var pageIndex = 1;
            var pageSize = 25;
            var pagingated = surfBoards.Skip(pageIndex - 1* pageSize).Take(pageSize);





        }
    }
}
