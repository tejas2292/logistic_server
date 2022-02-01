const express = require("express");
const router = express.Router(); //express router
const addPCController = require("../../controllers/couriers/get_couriers");

router.get("/", addPCController.findCourier);

module.exports = router;
