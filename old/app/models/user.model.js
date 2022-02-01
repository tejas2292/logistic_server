const { Model, DataTypes } = require("sequelize");
var bcrypt = require("bcryptjs");

module.exports = (sequelize) => {
  class User extends Model {
    static associate(db) {
      User.belongsToMany(db.Role, {
        through: "user_roles",
        foreignKey: "userId",
        otherKey: "roleId",
      });
    }
    comparePassword(password) {
      return bcrypt.compareSync(password, this.password);
    }
    removePassword() {
      const user = { ...this.get({ plain: true }) };
      delete user.password;
      return user;
    }
  }
  User.init(
    {
      fullname: {
        type: DataTypes.STRING,
      },
      tumb: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
      },
      mobile: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      companyname: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      isVerify: {
        type: DataTypes.STRING,
        default: 0,
      },
      isActive: {
        type: DataTypes.STRING,
        default: 0,
      },
    },
    {
      modelName: "User",
      sequelize: sequelize,
      timestamps: false,
      defaultScope: {
        attributes: {
          exclude: ["password"],
        },
      },
      scopes: {
        auth: {
          attributes: {
            include: ["password"],
          },
        },
      },
    }
  );
  // console.log("loglogloguse" + User);

  return User;
};
