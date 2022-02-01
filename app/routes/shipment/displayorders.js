const express= require('express');
const router=express.Router();      //express router
const orderDisplayer=require('../../controllers/shipment/displayorders')


//register
router.get('/',orderDisplayer.orderDisplay);


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