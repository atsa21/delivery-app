const Shop = require("../models/shop");

exports.getShops = (req, res, next) => {
    Shop.find().select('-products').then(shops => {
        res.status(200).json({
            message: "Shops fetched succesfully!",
            data: shops
        })
    });
}

exports.getShopById = (req, res, next) => {
    const shopId = req.params.id;

    Shop.findById(shopId).then(shop => {
        res.status(200).json({
            message: "Shop getted by id succesfully!",
            data: shop
        })
    });
}