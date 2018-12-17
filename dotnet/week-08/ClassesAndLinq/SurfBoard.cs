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

        private string _logo;
        public string Logo
        {
            get { return _logo;}
            set { _logo = value;}
        }
        
        // DateReleased
        public DateTime DatePurchased { get; set; } = DateTime.Now;

        // private
        public string Owner { get; set; }

        public SurfBoard(string owner)
        {
            this.Owner = owner;
        }

        public void TransferOwnership(string newOwner)
        {
            this.Owner = newOwner;
            this.DatePurchased = DateTime.Now;
        }

        public override string ToString()
        {
            return $"{this.Owner}, {this.DatePurchased}, {this.Height}, {this.Width}, {this.Material}, {this.NumberOfFins}, {this.Shape}";
        }

    }
}