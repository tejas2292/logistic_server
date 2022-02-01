const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config/auth.config");
var moment = require("moment");

const db = require("../../models");
const Courier = db.couriers;

const logCourier = async (req, res) => {
  Courier.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
  })
    .then((courier) => {
      if (!courier) {
        return res.status(400).send({
          status: "102",
          message: "Courier Not found.",
        });
      }
      res.status(200).send({
        status: "VB100",
        token: createJWT(courier),
        courier: courier,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

function createJWT(courier) {
  var payload = {
    sub: { id: courier.courier_id },
    iat: moment().unix(),
    exp: moment().add(1000, "days").unix(),
  };
  return jwt.sign(payload, config.TOKEN_SECRET);
}

module.exports = { logCourier };
