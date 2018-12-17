using System;
using System.Linq;

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

            // db.SaveChanges();

            // READ data
            var allCameras = db.Cameras;

            foreach (var camera in allCameras)
            {
                System.Console.WriteLine($"{camera.Brand} has an ISO of {camera.MaxIso}");
            }
            // WHERE
            var onlyFullFrames = db.Cameras.Where(camera => camera.IsFullFrame);
            System.Console.WriteLine("My Full Frame Cameras");
            foreach (var camera in onlyFullFrames)
            {
                System.Console.WriteLine($"{camera.Brand} has an ISO of {camera.MaxIso}");
            }

            // SELECT FramesPerSecond FROM Cameras
            var myFPS = db.Cameras.Select(camera => camera.FramesPerSecond);
            System.Console.WriteLine("My Frames per seconds for all cameras");
            foreach (var fps in myFPS)
            {
                System.Console.WriteLine(fps);
            }

            // SELECT FramesPerSecond , Brand, Id FROM Cameras
            var results = db.Cameras.Select(camera => new { camera.FramesPerSecond, camera.Brand, camera.Id });
            System.Console.WriteLine("My results");
            foreach (var camera in results)
            {
                System.Console.WriteLine($"{camera.Brand} has {camera.FramesPerSecond}, and an Id of {camera.Id} ");
            }
            // UPDATE 
            // UPDATE Cameras SET MaxIso=102400 WHERE Id = 2
            // part 1: find the camera, pull into context
            var cannon1dx = db.Cameras.FirstOrDefault(camera => camera.Id == 2);
            if (cannon1dx != null)
            {
                // part 2: update the data 
                cannon1dx.MaxIso = 102400;
                // part 3: Save the changes
                db.SaveChanges();
            }
            else
            {
                Console.WriteLine("Camera with ID 2 not found");
            }
            // DELETE
            // part 1: find it 
            var toRemove = db.Cameras.FirstOrDefault(camera => camera.Id == 2);
            // part 2: delete it 
            if (toRemove != null)
            {
                db.Cameras.Remove(toRemove);
                // part 3 : save your changes
                db.SaveChanges();
            }

        }
    }
}
