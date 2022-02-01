const { Model } = require("sequelize");
const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  class Role extends Model {
    static associate(db) {
      Role.belongsToMany(db.User, {
        through: "user_roles",
        foreignKey: "roleId",
        otherKey: "userId",
      });
    }
  }
  Role.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
    },
    {
      modelName: "Role",
      sequelize: sequelize,
      timestamps: false,
    }
  );
  Role.ROLES = ["user", "admin", "moderator"];
  return Role;
};
