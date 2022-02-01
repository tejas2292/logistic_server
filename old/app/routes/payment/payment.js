const express = require("express");
const router = express.Router();
const paymentController = require("../../controllers/payment");

router.post("/payamentgateway", paymentController.payment);

module.exports = router;
