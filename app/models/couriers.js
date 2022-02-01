const Sequelize = require("sequelize");

const Courier = (sequelize) => {
  return sequelize.define(
    "couriers",
    {
      courier_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        // user_id can not be null.
        allowNull: false,
        // For uniquely identify user.
        primaryKey: true,
      },
      username: { type: Sequelize.STRING, allowNull: false },
      password: { type: Sequelize.STRING, allowNull: false },
      company_name: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false },
      cin: { type: Sequelize.STRING, allowNull: false },
      company_address: { type: Sequelize.STRING(1234), allowNull: false },
      pincode: { type: Sequelize.INTEGER, allowNull: false },
      website: { type: Sequelize.STRING, allowNull: false },
      deliverable_id: { type: Sequelize.INTEGER, allowNull: true },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = Courier;
