const express = require("express");
const multer = require("multer");
const router = express.Router();
const imageController = require("../../controllers/courier/updateimage");

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

router.post(
  "/file/upload",
  upload.single("uploadfile"),
  imageController.uploadFile
);

module.exports = router;
