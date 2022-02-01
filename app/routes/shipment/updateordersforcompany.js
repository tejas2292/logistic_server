const express= require('express');
const router=express.Router();      //express router
const orderDisplayer=require('../../controllers/shipment/updateordersforcompany')


//register
router.post('/',orderDisplayer.orderUpdate);



module.exports=router;