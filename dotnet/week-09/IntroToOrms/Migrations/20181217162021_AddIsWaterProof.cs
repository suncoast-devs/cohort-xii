using Microsoft.EntityFrameworkCore.Migrations;

namespace IntroToOrms.Migrations
{
    public partial class AddIsWaterProof : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsWaterProof",
                table: "Cameras",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsWaterProof",
                table: "Cameras");
        }
    }
}
