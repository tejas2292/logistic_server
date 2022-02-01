
  module.exports = (sequelize, Sequelize) => {
    const Addressdetail = sequelize.define("addressdetail", {
      address_line_1: {
        type: Sequelize.STRING
      },
      address_line_2: {
        type: Sequelize.STRING
      },
      pickup_pincode: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      }
    });
  
    return Addressdetail;
  };