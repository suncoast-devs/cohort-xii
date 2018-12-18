﻿// <auto-generated />
using IntroToOrms;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace IntroToOrms.Migrations
{
    [DbContext(typeof(MyCamerasContext))]
    [Migration("20181217162021_AddIsWaterProof")]
    partial class AddIsWaterProof
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("IntroToOrms.Cameras", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Brand");

                    b.Property<int>("FramesPerSecond");

                    b.Property<bool>("IsFullFrame");

                    b.Property<bool>("IsWaterProof");

                    b.Property<int>("MaxIso");

                    b.HasKey("Id");

                    b.ToTable("Cameras");
                });
#pragma warning restore 612, 618
        }
    }
}