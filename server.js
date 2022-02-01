const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const app = express();
const sequelize = require("sequelize");

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//database
const db = require("./app/models");

db.sequelize.sync();
// app.use(express.json({extended:false}))

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to Logistic Application NEWW." }); //send response to client after client makes a get request "/" through localhost5000 //send in json format ie. object
});

//define routes

app.use("/api/users/register", require("./app/routes/users/register"));
app.use("/api/users/login", require("./app/routes/users/login"));
app.use("/api/users/address", require("./app/routes/users/address"));
app.use("/api/shipment/products", require("./app/routes/shipment/products"));
app.use("/api/shipment/orders", require("./app/routes/shipment/orders"));
app.use(
  "/api/shipment/displayorders",
  require("./app/routes/shipment/displayorders")
);
app.use(
  "/api/shipment/displayproducts",
  require("./app/routes/shipment/displayproducts")
);
app.use(
  "/api/couriers/displaycouriers",
  require("./app/routes/couriers/displaycouriers")
);
app.use(
  "/api/users/addressdetails",
  require("./app/routes/users/addressdetails")
);
app.use("/api/couriers/register", require("./app/routes/couriers/register"));
app.use("/api/couriers/login", require("./app/routes/couriers/login"));
app.use(
  "/api/shipment/orderDetails",
  require("./app/routes/shipment/orderDetails")
);
app.use("/api/couriers/add_pc", require("./app/routes/couriers/add_pc"));
app.use(
  "/api/couriers/get_couriers",
  require("./app/routes/couriers/get_couriers")
);
app.use("/api/shipment/updateordersforcompany",
  require("./app/routes/shipment/updateordersforcompany")
);
app.use("/api/shipment/cancelorder",
  require("./app/routes/shipment/cancelorder")
);

app.use(
  "/api/users/userdetails",
  require("./app/routes/users/userdetails")
);

app.use("/api/shipment/updateorderuser",
  require("./app/routes/shipment/update_order_user")
);
app.use(
  "/api/shipment/productdetails",
  require("./app/routes/shipment/productdetails")
);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
