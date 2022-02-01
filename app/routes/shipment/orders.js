const express= require('express');
const router=express.Router();      //express router
const orderController=require('../../controllers/shipment/orders')



//register
router.post('/',orderController.orderShipment);



module.exports=router;