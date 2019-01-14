using System.Collections.Generic;

namespace MasterReview.Models
{
    public class Team
    {
        public int Id { get; set; }

        public string City { get; set; }
        public string Mascot { get; set; }

        public string Name { get; set; }

        public int TeamLogoId { get; set; }
        public TeamLogo TeamLogo { get; set; }

        public List<Player> Players { get; set; } = new List<Player>();
    }
}