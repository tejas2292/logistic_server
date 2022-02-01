// <<<<<<< account_setting_api
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();

// // var corsOptions = {
// //   origin: "http://localhost:8081"
// // };

// app.use(cors());

// // parse requests of content-type - application/json
// app.use(bodyParser.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// //database
// const db = require("./app/models");
// const Role = db.role;
// const Productdestails = db.productdetails;

// db.sequelize.sync();

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to Logistic application." });
// });

// // routes
// require('./app/routes/auth.routes')(app);
// require('./app/routes/user.routes')(app);
// require('./app/routes/productdetails.routes')(app);
// require('./app/routes/accountsettinggeneral.routes')(app);
// require('./app/routes/accountsettingaddress.routes')(app);

// // set port, listen for requests
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });
// =======
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs")
const app = express();


const rootAddressRouter = require("./app/routes/address/addressdetail");
const rootReturnShipment = require("./app/routes/shipment/returnshipment");
const rootViewProfile = require("./app/routes/viewprofile/view.profile");
const rootPayment = require("./app/routes/payment/payment");
const rootTotalOrder = require("./app/routes/orders/totalorder");
const rootDeliverOrder = require("./app/routes/orders/deliveredorder");
const rootCourier = require("./app/routes/courier/comapnyRegistration");
const rootUpdateImage = require("./app/routes/courier/update.image");


// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Logistic application." });
});

// routes
// <<<<<<< logistic_API
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

app.use("/api", rootAddressRouter);
app.use("/api", rootViewProfile);
app.use("/api", rootReturnShipment);
app.use("/api", rootPayment);
app.use("/api", rootTotalOrder);
app.use("/api", rootDeliverOrder);
app.use("/api", rootCourier);
app.use("/api", rootUpdateImage);
// =======
// require('./app/routes/auth.routes')(app);
// require('./app/routes/user.routes')(app);
require('./app/routes/Order')(app);
// require('./app/routes/productdetails.routes')(app);
require('./app/routes/accountsettinggeneral.routes')(app);
require('./app/routes/accountsettingaddress.routes')(app);
console.log(bcrypt.hashSync("1234", 8))
// $2a$08$Blq9QtPfGYe9dwYR4YcbRu6sRnODtuWeEVPr34B.0JMr58Q35yFii
// >>>>>>> master
// set port, listen for requests



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

