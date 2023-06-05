const express = require("express");

const router = express.Router();

const { cfkProducts } = require("../../controllers");

router.get("/", cfkProducts.listCfkFoods);

router.get("/:productId", cfkProducts.getCfkFoodById);

module.exports = router;
