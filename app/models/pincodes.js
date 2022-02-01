const Sequelize = require("sequelize");

const PinCodes = (sequelize) => {
  return sequelize.define(
    "pincodes",
    {
      pincodes: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        // user_id can not be null.
        allowNull: false,
        // For uniquely identify user.
        primaryKey: true,
      },      
      company_name: { type: Sequelize.JSON, allowNull: false },      
    },
    {
      timestamps: false,
    }
  );
};

module.exports = PinCodes;



