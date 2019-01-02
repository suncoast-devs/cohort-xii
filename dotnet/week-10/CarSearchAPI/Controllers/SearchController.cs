using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using carsearchapi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace carsearchapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {

        private DatabaseContext db;

        public SearchController()
        {
            this.db = new DatabaseContext();
        }

        // GET api/search
        [HttpGet]
        public ActionResult<List<Car>> Get([FromQuery]string make = "", [FromQuery]string model = "", [FromQuery] string zip = "")
        {
            var results = this.db.Cars
                .Include(car => car.Dealer)
                .Include(car => car.Model)
                    .ThenInclude(carModel => carModel.Make)
                .Where(car =>
                    car.Model.Name.ToLower() == model.ToLower() ||
                    car.Model.Make.Name.ToLower() == make.ToLower() ||
                    car.Dealer.Zip == zip);

            return results.ToList();
        }


    }
}
