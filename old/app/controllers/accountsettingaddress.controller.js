const db = require("../models/index.js");
const Addressdetail = db.addressdetail;




//ADDRESS DETAIL PART

// Post a Addressdetail
exports.create = (req, res) => {
    // Save to MySQL database
    Addressdetail.create({
        address_line_1: req.body.address_line_1,
        address_line_2: req.body.address_line_2,
        pickup_pincode: req.body.pickup_pincode,
        city: req.body.city,
        state: req.body.state,
    }).then((addressdetail) => {
        res.status(200).json({
            status: true,
            message: "Address Details created successfully",
        });
    });
};

// Get all Addressdetail
exports.findAll = (req, res) => {
    Addressdetail.findAll().then((addressdetails) => {
        // Send all books as response
        res.status(200).json({
            status: true,
            data: addressdetails,
        });
    });
};

// Find a Addressdetails by Id
exports.findByPk = (req, res) => {
    Addressdetail.findByPk(req.params.addressdetailId).then((addressdetail) => {
        res.status(200).json({
            status: true,
            data: addressdetail,
        });
    });
};

// Update a Addressdetail
exports.update = (req, res) => {
    const id = req.params.addressdetailId;
    Addressdetail.update(
        {
            address_line_1: req.body.address_line_1,
            address_line_2: req.body.address_line_2,
            pickup_pincode: req.body.pickup_pincode,
            city: req.body.city,
            state: req.body.state,
        },
        { where: { id: req.params.addressdetailId } }
    ).then(() => {
        res.status(200).json({
            status: true,
            message: "Address Details updated successfully with id = " + id
        });
    });
};

// Delete a Addressdetail by Id
exports.delete = (req, res) => {
    const id = req.params.addressdetailId;
    Addressdetail.destroy({
        where: { id: id },
    }).then(() => {
        res.status(200).json({
            status: true,
            message: "product Details deleted successfully with id = " + id
        });
    });
};