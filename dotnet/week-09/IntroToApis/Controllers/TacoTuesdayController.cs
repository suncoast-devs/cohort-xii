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
    public class TacoTuesdayController : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> GetAction()
        {
            return "Hooray its taco tuesday!!!";
        }
    }
}