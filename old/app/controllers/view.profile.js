const db = require("../config/db.config");
const { User } = require("../models/index");

exports.viewProfile = (req, res, next) => {
  console.log(req.params.id);
  User.findByPk(req.params.id)
    .then((user_profile) => {
      if (user_profile) {
        res.status(200).json({
          user_profile,
        });
      } else {
        res.status(404).json({
          message: "No valid entry found for provided ID",
        });
      }
    })
    .catch((err) => {
      console.log("Error While Getting User Data ", err);
      res.status(500).json({ error: err });
    });
};
