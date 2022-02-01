const express= require('express');
const router=express.Router();      //express router
const orderDisplayer=require('../../controllers/shipment/orderDetails')


//register
router.post('/',orderDisplayer.orderDetails);



module.exports=router;