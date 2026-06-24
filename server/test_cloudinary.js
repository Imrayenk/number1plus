require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.api.ping(function(error, result) {
    if (error) {
        console.error("Cloudinary Ping Failed:", error);
    } else {
        console.log("Cloudinary Ping Success:", result);
    }
});
