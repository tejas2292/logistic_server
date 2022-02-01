const express = require("express");
const router = express.Router(); //express router
const registerController = require("../../controllers/couriers/register");

//register
router.post("/", registerController.regCourier);

module.exports = router;
