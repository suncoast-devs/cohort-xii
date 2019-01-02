using Microsoft.EntityFrameworkCore.Migrations;

namespace carsearchapi.Migrations
{
    public partial class AddedDealerAndCarAndModelAndCarRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DealerId",
                table: "Cars",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ModelId",
                table: "Cars",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Cars_DealerId",
                table: "Cars",
                column: "DealerId");

            migrationBuilder.CreateIndex(
                name: "IX_Cars_ModelId",
                table: "Cars",
                column: "ModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_Dealers_DealerId",
                table: "Cars",
                column: "DealerId",
                principalTable: "Dealers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Cars_Models_ModelId",
                table: "Cars",
                column: "ModelId",
                principalTable: "Models",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cars_Dealers_DealerId",
                table: "Cars");

            migrationBuilder.DropForeignKey(
                name: "FK_Cars_Models_ModelId",
                table: "Cars");

            migrationBuilder.DropIndex(
                name: "IX_Cars_DealerId",
                table: "Cars");

            migrationBuilder.DropIndex(
                name: "IX_Cars_ModelId",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "DealerId",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "ModelId",
                table: "Cars");
        }
    }
}
