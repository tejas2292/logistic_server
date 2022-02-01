const db =require('../../models')
const Products = db.products


const productdetails=async(req,res)=>{
    
    try {
        const product = {
           
            prod_id:req.body.prod_id
           
         
            
        };
   
    
        

        Products.findAll({
           where:{
               prod_id:req.body.prod_id
               

           },
        })
        .then((product) => {
            
          if (!product) {
            return res.status(400).send({ 
              status:"102", 
              message: "product Not found." });
          }
          else{
        //       Products.findAll({
        //           where:{
        //               product_id:order.product_id
        //           },
        //       }).then((product) =>{
        //           if(!product){
        //               return res.status(400).send({
        //                   status:"102",
        //                   message:"product not found."
        //               });
        //           }
        //           else{
        //               res.status(200).send({
        //                   status:"VB100",
        //                   orders:order,
        //                   product:product
        //               });
        //           }
        //       })
        //   }
          res.status(200).send({
            status:"VB100",
            products: product});
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





module.exports={productdetails};