using System.Collections.Generic;

namespace CarSearchApi.Models
{

    // prius, tocama, camry 
    public class Model
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int HighWayMPG { get; set; }
        public int CityMPG { get; set; }

        // Navigation Properties
        public int MakeId { get; set; }
        public Make Make { get; set; }

        public List<Car> Cars { get; set; } = new List<Car>();
    }
}