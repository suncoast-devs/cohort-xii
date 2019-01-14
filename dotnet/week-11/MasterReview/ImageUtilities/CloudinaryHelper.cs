using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace MasterReview.ImageUtilities
{
    public class CloudinaryHelper
    {
        private Cloudinary _cloudinary;
        public CloudinaryHelper()
        {
            Account account = new Account(
                "dbtqsg7vf", 
                "299973314231723", 
                "ZqeVmP6d_NmRh_7O6xLfOyrdjG4");

            _cloudinary = new Cloudinary(account);
        }

        public ImageUploadResult UploadFile(string path)
        {
            var uploadParams = new ImageUploadParams()
            {
                File = new FileDescription(path)
            };
            var uploadResult = _cloudinary.Upload(uploadParams);
            return uploadResult;
        }
    }

    public class CloudinaryKeys
    {
        public string CloudName { get; set; } = null;
        public string CloudKey { get; set; } = null;
        public string CloudSecret { get; set; } = null;
    }
}
