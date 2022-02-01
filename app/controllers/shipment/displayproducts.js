const bycrypt=require('bcryptjs');
const { orders } = require('../../models');
const db =require('../../models')
const Products= db.products


const prodDisplay=async(req,res)=>{
   
    //let id=req.params.id;
    //console.log(id);

    
    // const users = await User.findAll();
    // console.log(users.every(user => user instanceof User)); // true
    // console.log("All users:", JSON.stringify(users, null, 2));

    // const orders = await Orders.findAll();
    // console.log(orders.every(order => order instanceof Orders)); // true
    // console.log("All orders:", JSON.stringify(orders, null, 2));
    //res.send("Hello");

   

        Products.findAll() 
        .then((products) => {
          if (!products) {
            return res.status(400).send({ 
              status:"102", 
              message: "User Not found." });
          }
          res.status(200).send({
            status:"VB100",
            products: products});
        })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    

    };



module.exports={prodDisplay};