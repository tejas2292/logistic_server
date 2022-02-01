const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config/auth.config");
var moment = require("moment");
const db = require("../../models");
const Courier = db.couriers;

const regCourier = async (req, res) => {
  try {
    let courierr = await Courier.findOne({
      where: { company_name: req.body.company_name },
    });
    if (courierr) {
      return res.json({ msg: "Company name already exists.", status: "101" });
    }
    courierr = await Courier.findOne({ where: { email: req.body.email } });
    if (courierr) {
      return res.json({ msg: "Email already exists.", status: "101" });
    }
    courierr = await Courier.findOne({ where: { website: req.body.website } });
    if (courierr) {
      return res.json({ msg: "Website already exists.", status: "101" });
    }
    courierr = await Courier.findOne({ where: { website: req.body.username } });
    if (courierr) {
      return res.json({ msg: "Username already exists.", status: "101" });
    }

    const courier = {
      username: req.body.username,
      password: req.body.password,
      company_name: req.body.company_name,
      email: req.body.email,
      cin: req.body.cin,
      company_address: req.body.company_address,
      pincode: req.body.pincode,
      website: req.body.website,
      deliverable_id: req.body.deliverable_id,
    };
    console.log(req.body.mobile);
    return Courier.create(courier).then(function () {
      console.log("Courier saved to DB.");
      res.status(201).json({
        status: "VB100",
        message: "Courier created Successful ",
        token: createJWT(courier),
        courier: courier,
      });
    });
  } catch (err) {
    console.error(err.message);
    res.json({
      status: "VB104",
      msg: err.message,
    });
  }
};

function createJWT(courier) {
  var payload = {
    sub: { id: courier.courier_id },
    iat: moment().unix(),
    exp: moment().add(1000, "days").unix(),
  };
  return jwt.sign(payload, config.TOKEN_SECRET);
}

module.exports = { regCourier };
