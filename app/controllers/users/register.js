const bycrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const config = require("../../config/auth.config");
var moment = require('moment');
const db=require('../../models')
const User = db.users;


const regUser=async(req,res)=>{

    
    try {
            let userr=await User.findOne({where: {email: req.body.email}});   
            if(userr)    //email already exists in database
            {
                return res.json({msg:"Email already exists.",status:"101"});

            }
            userr=await User.findOne({where: {username: req.body.username}});   
            if(userr)    //username already exists in database
            {
                //return res.status(400).json({msg:"Username already exists."});
                return res.json({msg:"Username already exists.",status:"101"});
                
            }
            userr=await User.findOne({where: {mobile: req.body.mobile}});   
            if(userr)    //mobile already exists in database
            {
                //return res.status(400).json({msg:"Mobile already exists."});
                return res.json({msg:"Mobile already exists.",status:"101"});

                
            }
            console.log("check");

            const user = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                mobile: req.body.mobile,
                company_name: req.body.company_name,
                fb_token: req.body.fb_token,
                profile_pic: req.body.profile_pic,
                last_login: req.body.last_login,
                address_id: req.body.address_id,
            };
            console.log(req.body.mobile);
            return User.create(user).then(function () {
            console.log("User saved to DB.")
              res.status(201).json({ 
                status:"VB100",
                message: "User created Successful ",
                token : createJWT(user),
                user : user });

            }); 
            
    } catch (err) {
        console.error(err.message);
        res.json({
            status:"VB104",
            msg:err.message
        })
    }
}


function createJWT(user) {
    var payload = {
        sub: {id: user.user_id},
        iat: moment().unix(),
        exp: moment().add(1000, 'days').unix()
    };
    return jwt.sign(payload, config.TOKEN_SECRET);
  }

module.exports={regUser};