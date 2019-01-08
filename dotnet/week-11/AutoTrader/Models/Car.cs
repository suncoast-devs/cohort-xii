namespace CarSearchApi.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Year { get; set; }
        public string Color { get; set; }
        public int CurrentMilage { get; set; }
        public bool IsNew { get; set; }

        // Navigation Properties
        public int ModelId { get; set; }
        public Model Model { get; set; }

        public int? DealerId { get; set; }
        public Dealer Dealer { get; set; }

    }
}