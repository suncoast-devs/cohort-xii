using Microsoft.EntityFrameworkCore.Migrations;

namespace IntroToOrms.Migrations
{
    public partial class AddMegaPixels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "MegaPixels",
                table: "Cameras",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MegaPixels",
                table: "Cameras");
        }
    }
}
