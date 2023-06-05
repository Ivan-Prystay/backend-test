const express = require("express");

const router = express.Router();

const { mcDonnyProducts } = require("../../controllers");

router.get("/", mcDonnyProducts.listMcDonnyFoods);

router.get("/:productId", mcDonnyProducts.getMcDonnyFoodById);

module.exports = router;
