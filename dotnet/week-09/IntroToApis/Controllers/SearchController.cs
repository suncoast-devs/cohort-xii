using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IntroToApis.Models;
using Microsoft.AspNetCore.Mvc;

namespace IntroToApis.Controllers
{
    [Route("api/[controller]")]
    // localhost:5000/api/people
    [ApiController]
    public class SearchController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Person>> Search([FromQuery]string name)
        {
            // query our database
            var db = new PhoneBookContext();
            // search for people whose fullname contains name
            var results = db.Person.Where(person => person.FullName.ToLower().Contains(name.ToLower()));
            // return the results
            return results.ToList();
        }
    }
}