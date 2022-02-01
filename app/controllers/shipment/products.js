const bycrypt = require("bcryptjs");
const { products } = require("../../models");
const db = require("../../models");
const Products = db.products;

const prodShipment = async (req, res) => {
  //let id=req.params.id;
  //console.log(id);

  try {
    const id = Math.floor(Math.random() * 1000);
    const product = {
      prod_id: id,
      product_id: req.body.product_id,
      prod_name: req.body.prod_name,
      sku: req.body.sku,
      unit_price: req.body.unit_price,
      category: req.body.category,
      dimensions: req.body.dimensions,
      details: req.body.details,
      weight: req.body.weight,
    };
    return Products.create(product).then(function () {
      // console.log(product)

      console.log("Product saved to DB.");
      /*res.status(201).json({ 
            status:"VB100",
            message: "product saved Successfully ",
            product
            });*/
      Products.findOne({
        where: {
          prod_id: id,
        },
      }).then((prod) => {
        if (!prod) {
          return res.status(400).send({
            status: "102",
            message: "Product Not found.",
          });
        }
        res.status(200).send({
          status: "VB100",
          message: "product saved Successfully ",
          prod,
        });
      });
    });
  } catch (err) {
    console.error(err.message);
    res.json({
      status: "102",
      msg: err.message,
    });
  }
};

module.exports = { prodShipment };
