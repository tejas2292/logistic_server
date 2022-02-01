const express= require('express');
const router=express.Router();      //express router
const registerController=require('../../controllers/users/register')


//register
router.post('/',registerController.regUser);



module.exports=router;
