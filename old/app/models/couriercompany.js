const { Model, DataTypes, Sequelize } = require("sequelize");
// const bcrypt = require("bcrypt");

const CompanyDetail = (sequelize) => {
  class CompanyDetail extends Model {
    comparePassword(password) {
      return bcrypt.compareSync(password, this.password);
    }
    removePassword() {
      const user = { ...this.get({ plain: true }) };
      delete user.password;
      return user;
    }
  }

  return CompanyDetail.init(
    {
      companyName: {
        type: DataTypes.STRING,
      },
      emailAddress: {
        type: DataTypes.STRING,
      },
      cin: {
        type: DataTypes.INTEGER,
      },
      companyAddress: {
        type: DataTypes.STRING,
      },
      pinCode: {
        type: DataTypes.INTEGER,
      },
      companyWebsite: {
        type: DataTypes.STRING,
      },
    },
    { sequelize }
  );
};

module.exports = CompanyDetail;
// class User extends Model {
//   comparePassword(password) {
//     return bcrypt.compareSync(password, this.password);
//   }
//   removePassword() {
//     const user = { ...this.get({ plain: true }) };
//     delete user.password;
//     return user;
//   }
// }
