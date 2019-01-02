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
    public class DealerController : ControllerBase
    {

        private DatabaseContext db;

        public DealerController()
        {
            this.db = new DatabaseContext();
        }


        [HttpGet]
        public ActionResult<List<Dealer>> GetAllDealers()
        {
            var results = this.db.Dealers.OrderBy(o => o.Name);
            return results.ToList();
        }



    }
}
