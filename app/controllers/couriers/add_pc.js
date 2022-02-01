const bycrypt = require("bcryptjs");

const db = require("../../models");
const PinCodes = require("../../models/pincodes");
const Pincodes = db.pincodes;
const sequelize = require("sequelize");
const addpin = async (req, res) => {
  try {
    const pin_entry = {
      company_name: req.body.company_name,
      pincodes: req.body.pincodes,
    };
    let arr = JSON.parse(JSON.stringify(req.body.pincodes));

    console.log(typeof arr);

    arr.map(async (pin) => {
      try {
        console.log(pin);
        var courier_arr = await Pincodes.findOne({ where: { pincodes: pin } });
        if (courier_arr) {
          console.log("reqr", pin);
          var reqr = courier_arr.dataValues.company_name;
          reqr.push(req.body.company_name);
          console.log(reqr);
          Pincodes.update({ company_name: reqr }, { where: { pincodes: pin } })
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
        } else {
          var data_arr = [];
          data_arr.push(req.body.company_name);
          console.log(data_arr);
          const pincode_data = {
            pincodes: pin,
            company_name: data_arr,
          };
          return Pincodes.create(pincode_data)
            .then(function () {
              console.log("pincode_data saved to DB.");
              // res.status(201).json({
              //   message: "Courier created Successful ",

              //   pincode_data: pincode_data,
              // });
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
        res.status(201).json({ message: "Courier created Successful " });
      } catch (err) {
        console.error(err.message);
        // res.json({
        //   status: "102",
        //   msg: err.message,
        // });
      }
    });
  } catch (err) {
    console.error(err.message);
    // res.json({
    //   status: "102",
    //   msg: err.message,
    // });
  }
};

module.exports = { addpin };