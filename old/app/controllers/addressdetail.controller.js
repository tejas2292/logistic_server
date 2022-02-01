const db = require("../config/db.config");
const { AddressDetail } = require("../models/index");

// add address to DB
exports.addAddress = async (req, res, next) => {
  if (!req.body) {
    res.status(400).json({ message: "Please provide a Valid Detail." });
  } else {
    const address_detail = {
      Street: req.body.street,
      State: req.body.state,
      City: req.body.city,
      PINCODE: req.body.pincode,
    };

    return AddressDetail.create(address_detail)
      .then(() => {
        res.status(201).json({ message: "Address Addedd Successfully" });
      })
      .catch((err) => {
        res.json({ message: "something wrong" });
      });
  }
};

exports.getAddress = async (req, res, next) => {
  AddressDetail.findAll()
    .then((AddressDeatils) => {
      res.json({ AddressDeatils });
    })
    .catch((err) => {
      console.log(`error while getting data${err}`);
      throw new Error(`unable to get address deu to ${err}`);
    });
};

//Find User Address By ID
exports.getAddressById = async (req, res, next) => {
  AddressDetail.findByPk(req.params.id)
    .then((AddressDeatils) => {
      res.json({ AddressDeatils });
    })
    .catch((err) => {
      console.log(`error while getting data${err}`);
      throw new Error(`unable to get address deu to ${err}`);
    });
};

//Deleted Address
exports.deleteAddress = async (req, res, next) => {
  const deletedData = await AddressDetail.destroy({
    where: { id: req.params.id },
  });
  if (deletedData) {
    then((AddressDeatils) => {
      res.status(200).json({
        message: `Address Deleted For ID:${id}`,
      });
    }).catch((err) => {
      console.log("Something went wrong ", err);
      res.status(500).json({ error: err });
    });
  } else {
    res.json({
      message: "Data Not Deleted",
    });
  }
};
