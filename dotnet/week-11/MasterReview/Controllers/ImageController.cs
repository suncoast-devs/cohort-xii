using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MasterReview.ImageUtilities;
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
            return Ok(filePath);
        }

    }
}