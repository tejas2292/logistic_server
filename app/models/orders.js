

const Sequelize = require("sequelize");

const orders = (sequelize)=> {
return sequelize.define("orders", {
 
  order_id: {
    type: Sequelize.INTEGER,

    autoIncrement: true,

    
    allowNull: false,

    
    primaryKey: true,
  },
  // product_id: { 
  //   type: Sequelize.INTEGER,
  //   allowNull: false, 
  //   //foreign key
  // },
  product_id: { 
    type: Sequelize.INTEGER,
    allowNull: false, 
    
  },
  receiver_address_id: { 
    type: Sequelize.INTEGER,
    allowNull: false, 
    
  },
  sender_address_id: { 
    type: Sequelize.INTEGER,
    allowNull: false, 
    //foreign key
  },
  sender_user_id: { 
    type: Sequelize.INTEGER,
    allowNull: false, 
    //foreign key
  },
  receiver_user_id: { 
    type: Sequelize.INTEGER,
    allowNull: false, 
    //foreign key
  },
  courier_partner_id: { 
    type: Sequelize.INTEGER,
    allowNull: false, 
    //foreign key
  },
  courier_partner_status: { 
    type: Sequelize.STRING,
    allowNull: false, 
    //foreign key
  },
  order_status: { 
    type: Sequelize.STRING,
    allowNull: false, 
    //foreign key
  },
  order_track: { 
    type: Sequelize.STRING,
    allowNull: false, 
    //foreign key
  },
  
// orders.associate=function(models){
//   orders.belongsTo(models.products,{
//     foreignKey: 'product_id',
//     as: 'product_id',
//     onDelete: 'CASCADE',
//   });
// }


});



};

module.exports = orders;