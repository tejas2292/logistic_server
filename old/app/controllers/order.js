const { authJwt } = require("../middleware");
const controller = require("./user.controller");
const db = require("../models");
const delivery_details= db.delivery_details;
const Shipment_details= db.Shipment_details;

    exports.pickup = (req, res) => {
      // Save User to Database
      delivery_details.create({
        id :req.body.id,
        fullname:req.body.fullname,
        address: req.body.address,
        state: req.body.state,
        city: req.body.city,
        PINCOde : req.body.pinocde,
        mobile_no:req.body.mobile_no,
        email: req.body.email,
        pickup_delivery : "pickup"
      })
        .then(user => {
          res.send({ message: "pickup address was registered successfully!" });
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
    };
    
  
  exports.delivery = (req, res) => {
    // Save User to Database
    delivery_details.create({
      id :req.body.id,
      fullname:req.body.fullname,
      address: req.body.address,
      state: req.body.state,
      city: req.body.city,
      PINCOde : req.body.pinocde,
      mobile_no:req.body.mobile_no,
      email: req.body.email,
      pickup_delivery : "delivery"
    })
      .then(user => {
        res.send({ message: "delivery address was registered successfully!" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  
  exports.shipment = (req, res) => {
    // Save shipment details to Database
    console.log("hii function horhahahai call")
    Shipment_details.create({
      id :req.body.id,
      Product_name:req.body.Product_name,
      SKU:req.body.SKU,
      Quantity:req.body.Quantity,
      Weight :req.body.Weight,
    Total_amount :req.body.Total_amount , 
     mode_of_payment :req.body.mode_of_payment,
    lenght:req.body.length,
      breath :req.body.breath,
      width:req.body.width,
      

  
    })
      .then(user => {
         res.send({ message: " shippment details was registered successfully!" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };


  exports.searchpincode = (req, res) => {
    // Save User to Database
    delivery_details.create({
      id :req.body.id,
      fullname:req.body.fullname,
      address: req.body.address,
      state: req.body.state,
      city: req.body.city,
      PINCOde : req.body.pinocde,
      mobile_no:req.body.mobile_no,
      email: req.body.email,
      pickup_delivery : "delivery"
    })
      .then(user => {
        res.send({ message: "delivery address was registered successfully!" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  
  exports.pincode = (req, res) => {
    // Save shipment details to Database
    console.log("hii function horhahahai call")
    delivery_details.findOne({
      where: {
        pincode: req.body.pincode
      }
    })
      .then(user => {
         res.send({ message: " pincode available" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
   
    }
  
       
  
       
  
      


