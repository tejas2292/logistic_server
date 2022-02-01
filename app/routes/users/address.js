//ADD MULTIPLE ADDRESS FOR A USER
const express= require('express');
const router=express.Router();      //express router
const registerController=require('../../controllers/users/address')


//register
router.post('/',registerController.addressUser);



module.exports=router;


