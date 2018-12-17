using System;

namespace IntroToOrms
{
    class Program
    {
        static void Main(string[] args)
        {
            var db = new MyCamerasContext();

            // CREATE data
            // db.Cameras.Add(new Cameras{
            //     Brand ="Cannon 7d",
            //     FramesPerSecond = 10,
            //     IsFullFrame = false,
            //     MaxIso = 51200 });

            // db.SaveChanges();
            // Get info from console and add to DB
            // System.Console.WriteLine("Enter the camera details");
            // var brand = Console.ReadLine();
            // var fps = int.Parse(Console.ReadLine());
            // var isFullFrame = bool.Parse(Console.ReadLine());
            // var iso = int.Parse(Console.ReadLine());

            // db.Cameras.Add(new Cameras{
            //     Brand = brand,
            //     FramesPerSecond = fps, 
            //     IsFullFrame = isFullFrame,
            //     MaxIso = iso
            // });

            db.SaveChanges();

            // READ data 
            // UPDATE 
            // DELETE
        }
    }
}
