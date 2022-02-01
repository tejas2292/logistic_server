const { couriers } = require('../../models');
const db =require('../../models')
const Orders = db.orders
const Products = db.products
const Couriers = db.couriers;


const orderDetails=async(req,res)=>{
    
    try {
        // const order = {
        //     //user_id: id,
            
        //     sender_user_id:req.body.sender_user_id,
        //     order_status:req.body.order_status
         
            
        // };
   
    
        

        Orders.findAll({
          // attributes:['product_id'],
           where:{
               sender_user_id:req.body.sender_user_id,
               order_status:req.body.order_status

           },
           include:[Products,Couriers]
        })
        .then((order) => {
            
          if (!order) {
            return res.status(400).send({ 
              status:"102", 
              message: "order Not found." });
          }
          else{
          //       Products.findAll({
          //         attributes:['prod_id'],
          //         //  where:{
          //         //      prod_id:order.product_id
          //         //  },
          //      }).then((product) =>{
          //          if(!product){
          //              return res.status(400).send({
          //                  status:"102",
          //                  message:"product not found."
          //              });
          //         }
          //         else{
          //             res.status(200).send({
          //                 status:"VB100",
          //                 orders:order,
          //                 product:product
          //             });
          //          }
          //     })
          // }
          res.status(200).send({
            status:"VB100",
            orders: order});
          }
        
    })
        .catch((err) => {
          res.status(500).send({ message: err.message });
        });
    }catch (err) {
        console.error(err.message);
        res.json({
            status:"102",
            msg: err.message
        })
    }

    };





module.exports={orderDetails};