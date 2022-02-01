const db = require("../../config/db.config");
const { DeliveredOder } = require("../../models/index");

exports.postDeliveredOrder = async (req, res, next) => {
  if (!req.body) {
    res.status(400).json({
      message: " Enter Detail",
    });
  } else {
    const delivered_data = {
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      phone: req.body.phone,
      email: req.body.email,
      addressLine1: req.body.addressline1,
      postCode: req.body.post_code,
      city: req.body.city,
      state: req.body.state,
      companyName: req.body.companyname,
      status: req.body.status,
    };

    return DeliveredOder.create(delivered_data)
      .then((result) => {
        res.json({
          result,
        });
      })
      .catch((err) => {});
  }
};

exports.getDeliveredOrder = (req, res, next) => {
  DeliveredOder.findAll({ where: { status: true } })
    .then((deliveredData) => {
      console.log(deliveredData);
      res.status(201).json({
        deliveredData,
      });
    })
    .catch((err) => {
      res.status(404).json({
        message: `data not delivered yet please wait !${err}`,
      });
    });
};
