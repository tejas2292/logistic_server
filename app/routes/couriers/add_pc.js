const express = require("express");
const router = express.Router(); //express router
const addPCController = require("../../controllers/couriers/add_pc");


router.post("/", addPCController.addpin);

module.exports = router;