module.exports = (sequelize, Sequelize) => {
    const shipment_details = sequelize.define("shipment_details", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
          },
      Product_name: {
        type: Sequelize.STRING
      },
      SKU: {
        type: Sequelize.STRING
      },
      Quantity: {
        type: Sequelize.INTEGER
      },
      Weight: {
        type: Sequelize.INTEGER
      },
      Total_amount: {
        type: Sequelize.INTEGER
      },
      mode_of_payment: {
        type: Sequelize.STRING
      },
      length :
      {
          type:Sequelize.INTEGER
      },
      breath :
      {
          type:Sequelize.INTEGER
      },
    Width :
      {
          type:Sequelize.INTEGER
      }

    
      
    });
  
    return shipment_details;
  };