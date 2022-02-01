const express= require('express');
const router=express.Router();      //express router
const update_order_userController=require('../../controllers/shipment/update_order_user')


router.post('/',update_order_userController.update);



module.exports=router;
