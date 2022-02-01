const express = require("express");
const router = express.Router();
const { checkorders } = require("../../middleware/checkorderstatus");
const controller = require("../../controllers/orders/deliverorder");

router.post("/post", controller.postDeliveredOrder);
router.get("/get", controller.getDeliveredOrder);

module.exports = router;
