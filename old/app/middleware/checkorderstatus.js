const db = require("../config/db.config");
const { DeliveredOder } = require("../models/index");

deliveredOrdered = (req, res, next) => {
  DeliveredOder.findOne({ where: { status: false } })
    .then(() => {
      res.json({
        message: "data not delivered yet please wait !",
      });
    })
    .catch((err) => {});
};

module.exports = deliveredOrdered;
