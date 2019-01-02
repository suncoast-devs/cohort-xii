namespace carsearchapi.Models
{

    // prius, tocama, camry 
    public class Model
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int HighWayMPG { get; set; }
        public int CityMPG { get; set; }
    }
}