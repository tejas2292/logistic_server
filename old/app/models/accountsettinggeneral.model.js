module.exports = (sequelize, Sequelize) => {
    const Generaldetail = sequelize.define("generaldetail", {
      company_name: {
        type: Sequelize.STRING
      },
      company_web_link: {
        type: Sequelize.STRING
      },
      company_email: {
        type: Sequelize.STRING
      }
    });
  
    return Generaldetail;
  };
