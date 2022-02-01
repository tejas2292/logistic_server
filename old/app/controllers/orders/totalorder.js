const db = require("../../config/db.config");
const { ReturnShipment } = require("../../models/index");

exports.getOrders = (req, res, next) => {
  ReturnShipment.findAll()
    .then((data) => {
      if (data) {
        res.status(201).json({
          data,
        });
      } else {
        res.status(404).json({
          message: `Data not found`,
        });
      }
    })
    .catch((err) => {
      res.json({
        message: `${err}`,
      });
    });
};
