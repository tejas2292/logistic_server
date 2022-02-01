const express= require('express');
const router=express.Router();      //express router
const prodDisplayer=require('../../controllers/shipment/productdetails')


//register
router.post('/',prodDisplayer.productdetails);



module.exports=router;