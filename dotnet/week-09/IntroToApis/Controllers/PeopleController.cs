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
    public class PeopleController : ControllerBase
    {

        // GET that returns all people
        // GET /api/people
        [HttpGet]
        public ActionResult<IEnumerable<Person>> GetAction()
        {
            // query my database
            var db = new PhoneBookContext();
            // SELECT * FROM Persons
            var people = db.Person.OrderBy(person => person.FullName);
            // return the result
            return people.ToList();
        }

        [HttpPost]
        public ActionResult<Person> AddPerson([FromBody] Person incomingPerson)
        {
            var db = new PhoneBookContext();
            db.Person.Add(incomingPerson);
            db.SaveChanges();
            return incomingPerson;
        }

        // DELETE /api/people/5
        // localhost:5000/api/people/{id}
        [HttpDelete("{id}")]
        public ActionResult<Object> DeletePerson([FromRoute]int id)
        {
            Console.WriteLine($"Delete the person: {id}");
            
            var db = new PhoneBookContext();
            var personToDelete = db.Person.FirstOrDefault(person => person.Id == id);
            if (personToDelete != null)
            {
                db.Person.Remove(personToDelete);
                db.SaveChanges();
                return personToDelete;
            }
            else
            {
                return new { message = "Person is not found" };
            }
        }
    }
}