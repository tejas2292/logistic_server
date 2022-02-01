const bycrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const config = require("../../config/auth.config");
var moment = require('moment');

const db =require('../../models')
const User = db.users;

const logUser=async(req,res)=>{

    User.findOne({
      where: {
        mobile: req.body.mobile,
      },
    }) 
    .then((user) => {
      if (!user) {
        return res.status(400).send({ 
          status:"102", 
          message: "User Not found." });
      }
      res.status(200).send({
        status:"VB100",
        token : createJWT(user),
        user: user});
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
}



function createJWT(user) {
  var payload = {
      sub: {id: user.user_id},
      iat: moment().unix(),
      exp: moment().add(1000, 'days').unix()
  };
  return jwt.sign(payload, config.TOKEN_SECRET);
}



module.exports={logUser};
