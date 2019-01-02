using Microsoft.EntityFrameworkCore.Migrations;

namespace carsearchapi.Migrations
{
    public partial class AddedMakeToModelRelationshipo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MakeId",
                table: "Models",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Models_MakeId",
                table: "Models",
                column: "MakeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Models_Makes_MakeId",
                table: "Models",
                column: "MakeId",
                principalTable: "Makes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Models_Makes_MakeId",
                table: "Models");

            migrationBuilder.DropIndex(
                name: "IX_Models_MakeId",
                table: "Models");

            migrationBuilder.DropColumn(
                name: "MakeId",
                table: "Models");
        }
    }
}
