const db = require("../../models");
const Pincode = db.pincodes;

const findCourier = async (req, res) => {
  try {
    let courier_array_s = await Pincode.findOne({
      where: { pincodes: req.body.source_pin },
    });
    let courier_array_d = await Pincode.findOne({
      where: { pincodes: req.body.dest_pin },
    });
    if (courier_array_d && courier_array_s) {
      const filteredArray = courier_array_d.dataValues.company_name.filter(
        (value) => courier_array_s.dataValues.company_name.includes(value)
      );
      console.log(typeof courier_array_d.dataValues.company_name);
      res.status(200).send({
        courier_list: filteredArray,
      });
    } else {
      res.status(400).send({ message: "pincode not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = { findCourier };
