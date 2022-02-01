
const fs = require("fs"); //require node filesystem module
const path = require("path"); //require node path module
const Sequelize = require("sequelize"); // require sequelize library

const config = require("../config/db.config"); // get config detail
const db = {}; // empty object

// const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
//   host: config.HOST,
//   dialect: config.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: config.pool.max,
//     min: config.pool.min,
//     acquire: config.pool.acquire,
//     idle: config.pool.idle,
//   },
// =======
// const config = require("../config/db.config.js");

// const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

// const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
// db.productdetails = require("./productdetails.model.js")(sequelize, Sequelize);
db.generaldetail = require("./accountsettinggeneral.model.js")(sequelize, Sequelize);
db.addressdetail = require("./accountsettingaddress.model.js")(sequelize, Sequelize);

db.delivery_details = require("./DeliveryDetailss")(sequelize,Sequelize);
db.Shipment_details=require("./Shipment_details")(sequelize,Sequelize);
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

const basename = path.basename(__filename); // to get current file: index.js

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const filePath = path.join(__dirname, file); // join method to combine dir and file name  //  console.log(filePath);
    const exportedFunction = require(filePath); // console.log(exportedFunction); export function from filepath
    const model = exportedFunction(sequelize, Sequelize.DataTypes); // store exportedFunction in model

    db[model.name] = model; // store function into db object
  });

Object.keys(db).forEach((modelName) => {
  //console.log(modelName); model Name contained model which return exported function
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
