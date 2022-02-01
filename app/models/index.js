const Sequelize = require("sequelize");
const config = require("../config/db.config");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require("../models/users")(sequelize, Sequelize);
db.address = require("../models/address")(sequelize, Sequelize);
db.orders = require("../models/orders")(sequelize, Sequelize);
db.products = require("../models/products")(sequelize, Sequelize);
db.couriers = require("../models/couriers")(sequelize, Sequelize);
db.pincodes=require("../models/pincodes")(sequelize, Sequelize);

//db.products.hasMany(db.orders,{as : "orders"});
db.products.hasMany(db.orders,{
  as:'orders'
});
db.couriers.hasMany(db.orders,{
  foreignKey:"courier_partner_id"
});
db.orders.belongsTo(db.products,{
  foreignKey:"product_id",
  
});
db.orders.belongsTo(db.couriers,{
  foreignKey:"courier_partner_id",
})

//Relations
// db.users.hasMany(db.address, { foreignKey: 'user_id' });

// const basename = path.basename(__filename); // to get current file: index.js

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach((file) => {
//     const filePath = path.join(__dirname, file); // join method to combine dir and file name  //  console.log(filePath);
//     const exportedFunction = require(filePath); // console.log(exportedFunction); export function from filepath
//     const model = exportedFunction(sequelize, Sequelize.DataTypes); // store exportedFunction in model

//     db[model.name] = model; // store function into db object
//   });

// Object.keys(db).forEach((modelName) => {
//   //console.log(modelName); model Name contained model which return exported function
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

module.exports = db;
