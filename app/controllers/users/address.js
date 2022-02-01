const bycrypt=require('bcryptjs')
const db =require('../../models')
const { AddressDetail } = require("../../models/index");
const Address = db.address
const Sequelize = require("sequelize");


const addressUser=async(req,res)=>{
   
    // let id=req.params.id;
    // console.log(id);

    try {
        const address = {
            user_id:req.body.user_id,
            address: req.body.address,
            state: req.body.state,
            pincode: req.body.pincode,
            city: req.body.city,
            
        };
        return Address.create(address).then(function () {
        console.log("address saved to DB.")
        
        Address.findOne({
              where: {
            //    address_id:Address.max('address_id')
             state:req.body.state,
             pincode:req.body.pincode,
             address: req.body.address,
            city:req.body.city,
             user_id:req.body.user_id,

             },
            // attributes: {
            //   include: [[Sequelize.fn('MAX', Sequelize.col('address_id')), 'address_id'][sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats']
            //   ]
            // }
            
            attributes: [['pincode','pincode'],[Sequelize.fn('MAX', Sequelize.col('address_id')), 'address_id']]
          }) 
          .then((ad) => {
            if (!ad) {
              return res.status(400).send({ 
                status:"102", 
                message: "Address Not found." });
            }
            res.status(200).send({
            status:"VB100",
            message: "Address saved Successfully ",
              ad
            });
            //console.log(ad)
          })
        }); 

        
       
    } catch (err) {
        console.error(err.message);
        res.json({
            status:"102",
            msg: err.message
        })
    }

    //Find User Address By ID
//     exports.getAddressById = async (req, res, next) => {
//     Address.findByPk(req.params.id)
//       .then((AddressDetails) => {
//         res.json({ AddressDetails });
//       })
//       .catch((err) => {
//         console.log(`error while getting data${err}`);
//         throw new Error(`unable to get address deu to ${err}`);
//       });
//   };




}

module.exports={addressUser};