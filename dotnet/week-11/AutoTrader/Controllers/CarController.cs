using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarSearchApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace content.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {

        private DatabaseContext db;

        public CarController()
        {
            this.db = new DatabaseContext();
        }


        [HttpGet]
        public async Task<ActionResult<List<Car>>> GetAllCars()
        {

            var results = this.db.Cars
              .Include(car => car.Dealer)
              .Include(car => car.Model)
                  .ThenInclude(carModel => carModel.Make)
              .OrderBy(car => car.Year)
                  .ThenBy(car => car.Model.Name)
                  .ThenBy(car => car.Model.Make.Name);

            return await results.ToListAsync();
        }

        // POST /api/car 
        /*
            {
                year, 
                milage, 
                modelId, 
                dealerId, 
                color, 
                isNew
            }
         */
        [HttpPost]
        public async Task<ActionResult<Car>> Post([FromBody] Car newCar)
        {
            this.db.Cars.Add(newCar);
            await this.db.SaveChangesAsync();
            return newCar;
        }


    }
}
