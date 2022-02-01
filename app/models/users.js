const Sequelize = require("sequelize");

const User  = (sequelize) => {
return  sequelize.define("users", {
  
 
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    // user_id can not be null.
    allowNull: false,
    // For uniquely identify user.
    primaryKey: true,
  },
  username: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  mobile: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  company_name: { type: Sequelize.STRING, allowNull: false },
  address_id:{type: Sequelize.INTEGER, allowNull: true},
  fb_token:{type: Sequelize.STRING, allowNull: false },
  profile_pic:{type: Sequelize.STRING, allowNull: false },
  last_login:{type: Sequelize.STRING, allowNull: false }


});
};

module.exports = User;
