const express= require('express');
const router=express.Router();      //express router
const addController=require('../../controllers/users/addressdetails')

//login
router.post('/', addController.addDetails);

module.exports=router;