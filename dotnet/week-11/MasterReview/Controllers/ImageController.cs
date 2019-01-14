using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MasterReview.ImageUtilities;
using MasterReview.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace content.Controllers
{
    [Route("api/[controller]")]
    public class ImageController : Controller
    {

        private IImageWriter imageWriter;

        public ImageController(IImageWriter writer)
        {
            this.imageWriter = writer;
        }


        [HttpPost]
        public async Task<ActionResult> ImageUpload(IFormFile file)
        {
            var filePath = await imageWriter.UploadImage(file);
            
            var results = new CloudinaryHelper().UploadFile(filePath);

            // Save things to our database
            var logo  = new TeamLogo{
                ImageUrl = results.SecureUri.AbsoluteUri
            };
            var db = new DatabaseContext();
            db.TeamLogos.Add(logo);
            db.SaveChanges();
            
            // TODO: clean up the new image
            imageWriter.DeleteFile(filePath);
            
            return Ok(logo);
        }

    }
}