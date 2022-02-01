const Sequelize = require("sequelize");

const Product = (sequelize)=>{
 
  return  sequelize.define("products", {
 
  prod_id: {
    type: Sequelize.INTEGER,

    autoIncrement: true,

    // product_id can not be null.
    allowNull: false,

    // For uniquely identify user.
    primaryKey: true,
  },
  prod_name: { type: Sequelize.STRING, allowNull: false },
  sku: { type: Sequelize.STRING, allowNull: false },
  unit_price: { type: Sequelize.FLOAT, allowNull: false },
  category: { type: Sequelize.STRING, allowNull: false },
  dimensions: { type: Sequelize.STRING, allowNull: false },
  details: { type: Sequelize.STRING, allowNull: true},
  weight: {type: Sequelize.STRING, allowNull:false}

  
},{
  timestamps: false
});
};


module.exports = Product;
