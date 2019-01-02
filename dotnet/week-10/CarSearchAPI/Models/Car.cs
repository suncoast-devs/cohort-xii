namespace carsearchapi.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Year { get; set; }
        public string Color { get; set; }
        public int CurrentMilage { get; set; }
        public bool IsNew { get; set; }

    }
}