const db =require('../../models')
const Orders = db.orders
const Products = db.products


const orderDetails=async(req,res)=>{

try {
    const order = {
        //user_id: id,
        
        sender_user_id:req.body.sender_user_id,
        order_status:req.body.order_status
     
        
    };

    Orders.findAll({
       where:{
           sender_user_id:req.body.sender_user_id,
           order_status:req.body.order_status

       },
    })
    .then((order) => {
      if (!order) {
        return res.status(400).send({ 
          status:"102", 
          message: "order Not found." });
      }
      else {
        authentication: async (req,res) => {

            try {
        
                let arrProd = await Orders.findAll({
                    attributes:['product_id'],
                    where:{
                        sender_user_id:req.body.sender_user_id,
                        order_status:req.body.order_status
             
                    },
                  });
        
                user = arrProd.toJSON();
                console.log(user);
        
               if (!user) {
                       console.log('Not a user');
               }
        
          }
        
            catch (e) {
        
            console.log(e)
        
            }
        }
       
          
      
         
        Products.findAll({

            //select products from products where prod_id in (Select product_id from orders where sender user id....)
         where:{
           prod_id: [ 132]
         },
       }).then((product) => {
        //  if (!product) {
        //   return res.status(400).send({ 
        //   status:"102", 
        //   message: "product Not found." });
        // }
        //else {
          res.status(200).send({
            status:"VB100",
            orders: order,
            products: product
          });
        //}
    })
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