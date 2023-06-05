const { NotFound } = require("http-errors");
const { McDonnyFood } = require("../../models");

const getMcDonnyFoodById = async (req, res) => {
  console.log("req.params: ", req.params);
  const { productId } = req.params;
  console.log("productId: ", productId);
  const result = await McDonnyFood.findById(productId);
  if (!result) {
    throw new NotFound(`Product with id ${productId} not found!`);
  }
  res.json({
    status: "success",
    code: 200,
    data: { result },
  });
};

module.exports = getMcDonnyFoodById;
