using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace IntroToOrms
{
    public partial class MyCamerasContext : DbContext
    {
        public MyCamerasContext()
        {
        }

        public MyCamerasContext(DbContextOptions<MyCamerasContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("server=localhost;database=MyCameras");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");
        }

        public DbSet<Cameras> Cameras { get; set; }
    }
}
