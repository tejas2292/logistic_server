const express = require("express");
const router = express.Router(); //express router
const loginController = require("../../controllers/couriers/login");

//login
router.post("/", loginController.logCourier);

module.exports = router;
