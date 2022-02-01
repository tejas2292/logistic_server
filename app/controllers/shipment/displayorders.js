const bycrypt=require('bcryptjs');
const { orders } = require('../../models');
const db =require('../../models')
const Orders = db.orders


const orderDisplay=async(req,res)=>{
   
    //let id=req.params.id;
    //console.log(id);

    
    // const users = await User.findAll();
    // console.log(users.every(user => user instanceof User)); // true
    // console.log("All users:", JSON.stringify(users, null, 2));

    // const orders = await Orders.findAll();
    // console.log(orders.every(order => order instanceof Orders)); // true
    // console.log("All orders:", JSON.stringify(orders, null, 2));
    //res.send("Hello");

   

        Orders.findAll() 
        .then((orders) => {
          if (!orders) {
            return res.status(400).send({ 
              status:"102", 
              message: "User Not found." });
          }
          res.status(200).send({
            status:"VB100",
            orders: orders});
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    

    };



module.exports={orderDisplay};