const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const EmployeeModel = require("../models/EmployeeModel.js");
const ImageUploadController = require("../controllers/ImageUploadController");

// Get base url
const baseURL =
  process.env.BASE_URL || `http://localhost:${process.env.PORT || 5000}`;

// File upload logic
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/images");
  },
  filename: (req, file, cb) => {
    let id = req.query.id;
    // Get employee from database
    EmployeeModel.findOne({ _id: id }, (err, Employee) => {
      if (err) {
        return cb(new Error("Error While getting employee"));
      }
      if (!Employee) {
        return cb(new Error("Employee not found"));
      }
      //   Set file to be uploaded
      const fileName = id + "_profile" + path.extname(file.originalname);
      //   Save file path in database
      Employee.profilePicture = `${baseURL}/assets/images/${fileName}`;
      Employee.save();

      cb(null, fileName);
    });
  },
});
// file filter to check format
const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    return cb(new Error("Invalid file format"));
  }
};

// Upload file middleware 
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1000 * 1000 * 5 }, // Maximum file size to be upload 5MB
});
/*
 * POST
 */
router.post("/uploadPic", upload.single("profilePic"), (req, res) => {
  ImageUploadController.upload(req, res);
});

module.exports = router;
