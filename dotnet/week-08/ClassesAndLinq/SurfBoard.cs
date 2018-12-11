using System;

namespace ClassesAndLinq
{
    class SurfBoard
    {
        // height
        public double Height { get; set; }
        // width
        public double Width { get; set; }
        // shape
        public string Shape { get; set; }
        // NumberOfFins
        public int NumberOfFins { get; set; }
        // Material
        public string Material { get; set; }
        // DateReleased
        public DateTime DateReleased { get; set; } = DateTime.Now;

        // private
    }
}