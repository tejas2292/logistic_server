const bycrypt = require("bcryptjs");
const db = require("../../models");
const Orders = db.orders;
const Product = db.products;
const Courier = db.couriers;
const Pincode = db.pincodes;

const update = async (req, res) => {
  try {
    console.log(req.body);
    Orders.findOne({
      where: {
        product_id: req.body.product_id,
      },
    }).then((order) => {
      if (!order) {
        return res.status(400).send({
          status: "102",
          message: "Order Not found.",
        });
      }

      //check status of order
      if (order.order_status === "processing") {
        console.log("Can be updated.", order);
        const cid = order.courier_partner_id;
        console.log("ok", cid);
        Courier.findOne({
          where: {
            courier_id: cid,
          },
        }).then((couriers) => {
          if (!couriers) {
            return res.status(400).send({
              status: "102",
              message: "Courier Not found.",
            });
          }
          console.log(
            couriers.company_name,
            req.body.sender_address_id,
            req.body.receiver_address_id
          );
          Pincode.findOne({
            where: { pincodes: req.body.sender_address_id },
          }).then((source) => {
            console.log(source);
            Pincode.findOne({
              where: { pincodes: req.body.receiver_address_id },
            }).then((dest) => {
              console.log(
                dest.dataValues.company_name,
                dest.dataValues.company_name.includes(couriers.company_name)
              );
              console.log(
                source.dataValues.company_name,
                source.dataValues.company_name.includes(couriers.company_name)
              );
              if (
                dest.dataValues.company_name.includes(couriers.company_name) &&
                source.dataValues.company_name.includes(couriers.company_name)
              ) 
              {
                // res.send("updated order");
                Orders.update(
                    {
                        receiver_address_id:req.body.receiver_address_id,
                        sender_address_id:req.body.sender_address_id,


                    },
                    {

                    where:{
                        product_id:req.body.product_id
                    },
                 })
                //  res.send(req.body)
                 res.send(order.dataValues)
              } else {
                res.send({
                  msg: "Cannot update.",
                });
              }
            });
          });
        });
      } else {
        res.send({
          msg: "Cannot update.",
        });
      }
      // res.status(200).send({
      //   status:"VB100",
      //   order: order});
    });
  } catch (err) {
    console.error(err.message);
    res.json({
      status: "102",
      msg: err.message,
    });
  }
};

module.exports = { update };
