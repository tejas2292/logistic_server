module.exports = function (app) {
    
    const generaldetail = require("../controllers/accountsettinggeneral.controller.js");
    
    
    // Create a new generaldetail
    app.post("/api/generaldetail", generaldetail.create);
  
    // Retrieve all generaldetail
    app.get("/api/generaldetails", generaldetail.findAll);
  
    // Retrieve a single generaldetail by Id
    app.get("/api/generaldetails/:generaldetailId", generaldetail.findByPk);
  
    // Update a generaldetail with Id
    app.put("/api/generaldetails/:generaldetailId", generaldetail.update);
  
    // Delete a generaldetail with Id
    app.delete("/api/generaldetails/:generaldetailId", generaldetail.delete);
  };

 