const { Sequelize, Model, DataTypes } = require("sequelize");

const ReturnShipment = (sequelize) => {
  return sequelize.define("ReturnShipment", {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    addressLine1: {
      type: DataTypes.STRING,
    },
    postCode: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    companyName: {
      type: DataTypes.STRING,
    },
    returnReason: {
      type: DataTypes.STRING,
    },
  });
};

module.exports = ReturnShipment;
