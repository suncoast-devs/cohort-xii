using System.Collections.Generic;

namespace CarSearchApi.Models
{
    public class Dealer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string PhoneNumber { get; set; }

        public List<Car> Cars { get; set; } = new List<Car>();
    }
}