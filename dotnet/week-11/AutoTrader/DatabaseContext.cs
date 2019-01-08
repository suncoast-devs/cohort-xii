using System;
using System.Text.RegularExpressions;
using CarSearchApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace content
{
    public partial class DatabaseContext : DbContext
    {
        public DatabaseContext()
        {
        }

        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        private string ConvertPostConnectionToConnectionString(string connection)
        {
            var _connection = connection.Replace("postgres://", String.Empty);
            var output = Regex.Split(_connection, ":|@|/");
            return $"server={output[2]};database={output[4]};User Id={output[0]}; password={output[1]}; port={output[3]}";
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var envConn = Environment.GetEnvironmentVariable("DATABASE_URL");
                var conn = "server=localhost;database=AutoTrader";
                if (envConn != null)
                {
                    conn = ConvertPostConnectionToConnectionString(envConn);
                }
                optionsBuilder.UseNpgsql(conn);
            }
        }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");


            modelBuilder.Entity<Dealer>().HasData(
                new Dealer { Id = -1, Name = "Bongos Cars", Zip = "33707" }
            );
            modelBuilder.Entity<Make>().HasData(
                            new Make { Id = -1, Name = "Toyota", },
                            new Make { Id = -2, Name = "Honda", }
                        );

            modelBuilder.Entity<Model>().HasData(
                            new Model { Id = -1, Name = "Prius", MakeId = -1 },
                            new Model { Id = -2, Name = "Camry", MakeId = -1 }
                        );
        }

        public DbSet<Car> Cars { get; set; }
        public DbSet<Dealer> Dealers { get; set; }
        public DbSet<Make> Makes { get; set; }
        public DbSet<Model> Models { get; set; }
    }
}
