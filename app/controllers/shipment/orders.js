const bycrypt=require('bcryptjs');
const { orders } = require('../../models');
const db =require('../../models')
const Orders = db.orders


const orderShipment=async(req,res)=>{
   
    //let id=req.params.id;
    //console.log(id);

    try {
        const order = {
            //user_id: id,
            order_id: req.body.order_id,
            product_id: req.body.product_id, //foreign key
            receiver_address_id: req.body.receiver_address_id,
            sender_address_id: req.body.sender_address_id,
            receiver_user_id:req.body.receiver_user_id,
            sender_user_id:req.body.sender_user_id,
            courier_partner_id:req.body.courier_partner_id,
            courier_partner_status:req.body.courier_partner_status,
            order_status:req.body.order_status,
            order_track:req.body.order_track
            
        };


       return Orders.create(order).then(function () {
        console.log("Order saved to DB.")


//         Orders.create(order)
//   .then(result => console.log(order.id));

        Orders.findOne({
            where: {
            product_id:req.body.product_id,
            //  sku:req.body.sku,
            //  unit_price:req.body.unit_price,
            //  category:req.body.category
            },
          }) 
          .then((order) => {
            if (!order) {
              return res.status(400).send({ 
                status:"102", 
                message: "order Not found." });
            }
            res.status(200).send({
            status:"VB100",
            message: "order saved Successfully ",
              order
            });
          })
    }); 
   
} catch (err) {
    console.error(err.message);
    res.json({
        status:"102",
        msg: err.message
    })
}


}

// module.exports={prodShipment};
//         console.log(order)
       
        
//           res.status(201).json({ 
//             status:"VB100",
            
            
            
//             message: "Order saved Successfully at",
//             order
            
//             });
//         }); 
       
//     } catch (err) {
//         console.error(err.message);
//         res.json({
//             status:"102",
//             msg: err.message
//         })
//     }


// }

module.exports={orderShipment};