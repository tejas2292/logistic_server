const db = require("../config/db.config");
const { Payment } = require("../models/index");
exports.payment = async (req, res, next) => {
  if (!req.body) {
    res.status(400).json({ message: "Please Enter Details!" });
  } else {
    const payment = {
      distance: req.body.distance,
      amount: req.body.amount,
      paymentMode: req.body.paymentmode,
    };
    console.log(req.body.distance);
    console.log(Payment);
    const data = await Payment.create(payment)
      .then(() => {
        res.status(201).json({ message: "Payment Detail Added" });
      })
      .catch((err) => {
        res.status(400).json({ message: "Something went wrong!" });
        console.log(err, "Error While Adding Payment data");
      });
    return data;
  }
};
