const { Sequelize, Model, DataTypes } = require("sequelize");

const Address = (sequelize) => {
  return sequelize.define("AddressDetail", {
    Street: {
      type: DataTypes.STRING,
    },
    State: {
      type: DataTypes.STRING,
    },
    City: {
      type: DataTypes.STRING,
    },
    PINCODE: {
      type: DataTypes.INTEGER,
    },
  });
};
module.exports = Address;
