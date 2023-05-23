const express = require("express");

const shopControllers = require("../controllers/shop-controller");

const router = express.Router();

router.get("", shopControllers.getShops);
router.get("/:id", shopControllers.getShopById);

module.exports = router;