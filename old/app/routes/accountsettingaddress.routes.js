module.exports = function (app) {
    
    const addressdetail = require("../controllers/accountsettingaddress.controller.js");
    
    
    // Create a new addressdetail
    app.post("/api/addressdetail", addressdetail.create);
  
    // Retrieve all addressdetail
    app.get("/api/addressdetails", addressdetail.findAll);
  
    // Retrieve a single addressdetail by Id
    app.get("/api/addressdetails/:addressdetailId", addressdetail.findByPk);
  
    // Update a addressdetail with Id
    app.put("/api/addressdetails/:addressdetailId", addressdetail.update);
  
    // Delete a addressdetail with Id
    app.delete("/api/addressdetails/:addressdetailId", addressdetail.delete);
  };
