const express= require('express');
const router=express.Router();      //express router
const prodDisplayer=require('../../controllers/shipment/displayproducts')


//register
router.get('/',prodDisplayer.prodDisplay);


// router.get('/',auth,async(req,res)=>{
//     // res.send("Get logged in user")

//     try {
//         const user=await User.findById(req.user.id).select('-password');    //since we dont want to send password
//         res.json(user);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({msg:"Server error"})
//     }
// })
module.exports=router;