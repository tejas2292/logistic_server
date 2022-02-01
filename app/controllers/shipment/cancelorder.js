const db =require('../../models')
const Orders = db.orders
const { Op } = require("sequelize");



const orderCancel=async(req,res)=>{
    
    try {
        const order = {
            //user_id: id,
            
            order_id: req.body.order_id,
            
            
            
         
            
        };
   
    
        

        Orders.destroy({
           
           where:{
            order_id: req.body.order_id,
             order_status: {
                    [Op.or]: ["Processing", "Scheduled"]
                },

           },
        })
        // Orders.findOne({
        //     where:{
        //         order_id:req.body.order_id
        //     },
        // })
        .then((order) => {
            
          if (!order) {
            return res.status(400).send({ 
              status:"102", 
              message: "order cannot be cancelled." ,
              order_status: order.order_status });
          }
          else{
              
        
          res.status(200).send({
            status:"VB100",
            message: "order successfully cancelled.",
            order_id: req.body.order_id,
            
         });
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





module.exports={orderCancel};