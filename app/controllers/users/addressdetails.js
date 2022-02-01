const bycrypt=require('bcryptjs')
const config = require("../../config/auth.config");
const db =require('../../models')
const Add= db.address;

const addDetails=async(req,res)=>{
  try {
    const addr = {
        //user_id: id,
        
        user_id: req.body.user_id
     
        
    };   

    

    Add.findAll({
        attributes: ['address_id','address','pincode'],
       where:{
        user_id: req.body.user_id

       },
    })
    .then((addr) => {
        
      if (!addr) {
        return res.status(400).send({ 
          status:"102", 
          message: "addr Not found." });
      }
      else{
        res.status(200).send({
            status:"VB100",
            address: addr});

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
}

    // Add.findAll({
    //     //fields to be displayed
    //   attributes: ['address_id','address','pincode'],
    //   //query
    //   where: {
    //     user_id: req.body.user_id,
    //   },
    // }) 
    // .then((add) => {
    //   if (!add) {
    //     return res.status(400).send({ 
    //       status:"102", 
    //       message: "User Not found." });
    //   }
    //   res.status(200).send({
    //     status:"VB100",
    //     add: add});
    // })
    // .catch((err) => {
    //   res.status(500).send({ message: err.message });
    // });
//}

module.exports={addDetails}