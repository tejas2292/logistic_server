const express= require('express');
const router=express.Router();      //express router
const loginController=require('../../controllers/users/login')

//login
router.post('/', loginController.logUser);

module.exports=router;

