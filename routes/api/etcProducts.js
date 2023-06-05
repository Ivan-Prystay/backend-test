const express = require("express");

const router = express.Router();

const { etcProducts } = require("../../controllers");

router.get("/", etcProducts.listEtcFoods);

router.get("/:productId", etcProducts.getEtcFoodById);

module.exports = router;
