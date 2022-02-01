const db =require('../../models')
const Users= db.users;

const userDetails=async(req,res)=>{

    try {
        const userD = {
            //user_id: id,
            
            mobile:req.body.mobile
         
            
        };   
    
        

        Users.findAll({
            attributes: ['user_id'],
           where:{
            mobile:req.body.mobile

           },
        })
        .then((userD) => {
            
          if (!userD) {
            return res.status(400).send({ 
              status:"102", 
              message: "user Not found." });
          }
          else{
            res.status(200).send({
                status:"VB100",
                user: userD});

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

module.exports={userDetails}