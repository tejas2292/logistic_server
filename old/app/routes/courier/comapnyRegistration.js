const express = require("express");
const router = express.Router();
const companyRegistration = require("../../controllers/courier/companyRegistration");

router.post("/company-name", companyRegistration.companyRegistration);
router.post("/company-login", companyRegistration.CompanyLogin);
router.get("/get-detail", companyRegistration.CompanyData);
module.exports = router;
