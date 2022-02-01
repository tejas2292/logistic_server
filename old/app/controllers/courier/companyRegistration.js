const db = require("../../config/db.config");
const { CompanyDetail } = require("../../models/index");
const config = require("../../config/auth.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function companyRegistration(req, res, next) {
  if (!(req.body.userName || req.body.email || req.body.password)) {
    res.json({
      message: "Enter Full detail",
    });
  } else {
    const user = {
      companyName: req.body.companyname,
      emailAddress: req.body.email,
      // password: bcrypt.hashSync(req.body.password, 10),
      cin: req.body.cin,
      companyAddress: req.body.companyaddress,
      pinCode: req.body.pincode,
      companyWebsite: req.body.companywebsite,
    };

    CompanyDetail.create(user)
      .then((user) => {
        res.status(201).json({
          message: `User Created Successfully with ${req.body.email}`,
          user,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something went wrong!" + err,
        });
      });
  }
}
function CompanyLogin(req, res, next) {
  if (!(req.body.email || req.body.password)) {
    res.json({
      message: "Enter Full detail",
    });
  } else {
    CompanyDetail.findOne({ where: { emailAddress: req.body.email } })
      .then((user) => {
        if (!user) {
          res.status(404).json({
            message: `Invalid Credentials!`,
          });
        } else {
          //   var validPassword = user.comparePassword(req.body.password);
          //   if (!validPassword) {
          //     res.status(401).json({
          //       message: `Invalid Password`,
          //     });
          //   }
          const token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400,
          });
          res.json({
            message: `Login SuccessFull`,
            token,
          });
        }
      })
      .catch((err) => {
        res.status(400).json({
          message: err.message,
        });
      });
  }
}
function CompanyData(req, res, next) {
  CompanyDetail.findAll()
    .then((result) => {
      res.status(201).json({ result });
    })
    .catch((err) => {});
}
// function DeleteUser(req, res, next) {
//   CompanyDetail.destroy({ where: { id: req.params.id } })
//     .then((user) => {
//       res.json({
//         message: `User Was Deleted SuccessFully`,
//       });
//     })
//     .catch((err) => {
//       res.status(404).json({
//         message: `Not Found`,
//       });
//     });
// }
// function UpdatePassword(req, res , next){
//     CompanyDetail.patch()
// }

module.exports = {
  companyRegistration: companyRegistration,
  CompanyLogin: CompanyLogin,
  CompanyData: CompanyData,
  //   DeleteUser: DeleteUser,
};
