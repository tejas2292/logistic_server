const express = require("express");
const router = express.Router();

const controller = require("../../controllers/returnshipment");
router.post("/returnshipment", controller.returnShipment);
module.exports = router;
