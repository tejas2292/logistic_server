const db = require("../config/db.config");
const { ReturnShipment } = require("../models/index");

// Return Shipment Request
exports.returnShipment = async (req, res, next) => {
  if (!req.body) {
    res.status(400).send({
      message: "Fill the contents!",
    });
  } else {
    const return_shipment = {
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      phone: req.body.phone,
      email: req.body.email,
      addressLine1: req.body.addressline1,
      postCode: req.body.post_code,
      city: req.body.city,
      state: req.body.state,
      companyName: req.body.company_name,
      returnReason: req.body.returnreason,
    };
    console.log(req.body.post_code);
    return ReturnShipment.create(return_shipment).then(function () {
      res.status(201).json({ message: "Request Successful " });
    });
  }
};
