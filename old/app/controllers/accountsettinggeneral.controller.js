const db = require("../models/index.js");
const Generaldetail = db.generaldetail;


//GENERAL DETAIL PART

exports.create = (req, res) => {
    // Save to MySQL database
    Generaldetail.create({
        company_name: req.body.company_name,
        company_web_link: req.body.company_web_link,
        company_email: req.body.company_email,
    }).then((generaldetail) => {
        res.status(200).json({
            status: true,
            message: "General Details created successfully",
        });
    });
};

// Get all generaldetails
exports.findAll = (req, res) => {
    Generaldetail.findAll().then((generaldetails) => {
        // Send all books as response
        res.status(200).json({
            status: true,
            data: generaldetails,
        });
    });
};

// Find a generaldetails by Id
exports.findByPk = (req, res) => {
    Generaldetail.findByPk(req.params.generaldetailId).then((generaldetail) => {
        res.status(200).json({
            status: true,
            data: generaldetail,
        });
    });
};

// Update a generaldetail
exports.update = (req, res) => {
    const id = req.params.generaldetailId;
    Generaldetail.update(
        {
            company_name: req.body.company_name,
            company_web_link: req.body.company_web_link,
            company_email: req.body.company_email,
        },
        { where: { id: req.params.generaldetailId } }
    ).then(() => {
        res.status(200).json({
            status: true,
            message: "General Details updated successfully with id = " + id
        });
    });
};

// Delete a generaldetail by Id
exports.delete = (req, res) => {
    const id = req.params.generaldetailId;
    Generaldetail.destroy({
        where: { id: id },
    }).then(() => {
        res.status(200).json({
            status: true,
            message: "General Details deleted successfully with id = " + id
        });
    });
};

