const Order = require("../models/order");

exports.addOrder = (req, res) => {

    const order = new Order({
        client: req.body.client,
        shop: req.body.shop,
        order: req.body.order,
        comment: req.body.comment,
        date: req.body.date,
        totalPrice: req.body.totalPrice
    });

    order.save().then( createdOrder => {
        res.status(201).json({
            message:"Order added succesfully",
            data: createdOrder
        });
    })
    .catch(error => {
        res.status(500).json({
            message: error
        })
    });
}