const Sequelize = require("sequelize");

const address = (sequelize)=> {
return sequelize.define("address", {
 
  address_id: {
    type: Sequelize.INTEGER,

    autoIncrement: true,

    // address_id can not be null.
    allowNull: false,

    // For uniquely identify address.
    primaryKey: true,
  },
  user_id: { 
    type: Sequelize.STRING, 
    allowNull: false, 
    //foreign key
  },
  
  address: { type: Sequelize.STRING, allowNull: false },
  state: { type: Sequelize.STRING, allowNull: false },
  city: { type: Sequelize.STRING, allowNull: false },
  pincode: { type: Sequelize.INTEGER, allowNull: false },
 


});
};

module.exports = address;
