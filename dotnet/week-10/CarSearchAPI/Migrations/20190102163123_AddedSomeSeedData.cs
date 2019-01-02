using Microsoft.EntityFrameworkCore.Migrations;

namespace carsearchapi.Migrations
{
    public partial class AddedSomeSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Dealers",
                columns: new[] { "Id", "Address", "City", "Name", "PhoneNumber", "State", "Zip" },
                values: new object[] { -1, null, null, "Bongos Cars", null, null, "33707" });

            migrationBuilder.InsertData(
                table: "Makes",
                columns: new[] { "Id", "CountryOfOrigin", "Name" },
                values: new object[,]
                {
                    { -1, null, "Toyota" },
                    { -2, null, "Honda" }
                });

            migrationBuilder.InsertData(
                table: "Models",
                columns: new[] { "Id", "CityMPG", "HighWayMPG", "MakeId", "Name" },
                values: new object[,]
                {
                    { -1, 0, 0, -1, "Prius" },
                    { -2, 0, 0, -1, "Camry" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Dealers",
                keyColumn: "Id",
                keyValue: -1);

            migrationBuilder.DeleteData(
                table: "Makes",
                keyColumn: "Id",
                keyValue: -2);

            migrationBuilder.DeleteData(
                table: "Models",
                keyColumn: "Id",
                keyValue: -2);

            migrationBuilder.DeleteData(
                table: "Models",
                keyColumn: "Id",
                keyValue: -1);

            migrationBuilder.DeleteData(
                table: "Makes",
                keyColumn: "Id",
                keyValue: -1);
        }
    }
}
