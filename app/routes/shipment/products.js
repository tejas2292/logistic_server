const express= require('express');
const router=express.Router();      //express router
const prodController=require('../../controllers/shipment/products')
const auth=require('../../middleware/auth')


router.post('/',prodController.prodShipment);



module.exports=router;
