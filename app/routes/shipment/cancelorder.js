const express= require('express');
const router=express.Router();      //express router
const orderDisplayer=require('../../controllers/shipment/cancelorder')


//register
router.post('/',orderDisplayer.orderCancel);



module.exports=router;