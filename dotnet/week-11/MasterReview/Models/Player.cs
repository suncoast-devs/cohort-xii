
namespace MasterReview.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string FullName { get; set; }

        public int Positions { get; set; }

        public string Number { get; set; }

        public int TeamId { get; set; }
        public Team Team { get; set; }
    }
}