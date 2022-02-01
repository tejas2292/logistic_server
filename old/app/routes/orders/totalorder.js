const express = require("express");
const router = express.Router();
const controller = require("../../controllers/orders/totalorder");

router.get("/totalorders", controller.getOrders);

module.exports = router;
