const { Sequelize, Model, DataTypes } = require("sequelize");
const Payment = (sequelize) => {
  return sequelize.define("Payment", {
    distance: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.STRING,
    },
    paymentMode: {
      type: DataTypes.STRING,
    },
  });
};
module.exports = Payment;
