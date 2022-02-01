const db =require('../../models')
const Orders = db.orders



const orderUpdate=async(req,res)=>{
    
    try {
        const order = {
            //user_id: id,
            
            order_id: req.body.order_id,
            order_status:req.body.order_status
            
            
         
            
        };
   
    
        

        Orders.update({order_status:req.body.order_status},{

           where:{
            order_id: req.body.order_id

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
              message: "order Not found." });
          }
          else{
              
        
          res.status(200).send({
            status:"VB100",
            order_id: req.body.order_id,
            updated_order_status: req.body.order_status
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





module.exports={orderUpdate};