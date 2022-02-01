const express = require("express");
const router = express.Router();

const controller = require("../../controllers/view.profile");
router.get("/viewprofile/:id", controller.viewProfile);
module.exports = router;
