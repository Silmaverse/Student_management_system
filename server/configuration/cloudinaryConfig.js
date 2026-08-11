// Require the cloudinary library
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "Student Management System",
        resource_type:"auto",
        timeout:60000
       },
      (error, result) => {
        if (error) {
          console.error("Clodinary Stream error",error);
          return reject(error);
        }
        return resolve(result.secure_url);
      },
    );

    uploadStream.end(fileBuffer);
  });
};

module.exports = { uploadToCloudinary };
