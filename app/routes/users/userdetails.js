const express= require('express');
const router=express.Router();      //express router
const addController=require('../../controllers/users/userdetails')

//login
router.post('/', addController.userDetails);

module.exports=router;