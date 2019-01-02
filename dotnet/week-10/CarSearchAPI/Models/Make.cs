using System.Collections.Generic;

namespace carsearchapi.Models
{

    // toyata, honda 
    public class Make
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CountryOfOrigin { get; set; }

        // Navigation Properties
        public List<Model> Models { get; set; } = new List<Model>();
    }
}