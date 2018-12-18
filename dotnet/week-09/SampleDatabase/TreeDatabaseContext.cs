using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SampleDatabase
{
    public partial class TreeDatabaseContext : DbContext
    {
        public TreeDatabaseContext()
        {
        }

        public TreeDatabaseContext(DbContextOptions<TreeDatabaseContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("server=localhost;database=TreeDatabase");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");
        }

        // public DbSet<ModelClassName> TableName{get;set;}
        public DbSet<Trees> Trees { get; set; }
    }
}
