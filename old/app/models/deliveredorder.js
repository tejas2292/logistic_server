const { Sequelize, Model, DataTypes } = require("sequelize");

const DeliveredOder = (sequelize) => {
  return sequelize.define("DeliveredOder", {
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
    status: {
      type: DataTypes.BOOLEAN,
    },
  });
};

module.exports = DeliveredOder;
