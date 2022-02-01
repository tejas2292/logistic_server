module.exports = (sequelize, Sequelize) => {
    const delivery_details = sequelize.define("delivery_details", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
          },
      fullname: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      PINCODE :
      {
type: Sequelize.INTEGER
      },
      mobile_no: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      
      pickup_delivery:
      {
          type: Sequelize.STRING
      }

    
      
    });
  
    return delivery_details;
  };