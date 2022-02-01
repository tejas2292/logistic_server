const express = require("express");
const router = express.Router();
// const { AddressDetail } = require("../../models");
const controller = require("../../controllers/addressdetail.controller");

router.post("/address", controller.addAddress);
router.get("/getaddress", controller.getAddress);
router.get("/getaddress/:id", controller.getAddressById);
router.delete("/delete/:id", controller.deleteAddress);

module.exports = router;
