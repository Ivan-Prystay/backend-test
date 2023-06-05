const { NotFound } = require("http-errors");
const { CfkFood } = require("../../models");

const getCfkFoodById = async (req, res) => {
  console.log("req.params: ", req.params);
  const { productId } = req.params;
  console.log("productId: ", productId);
  const result = await CfkFood.findById(productId);
  if (!result) {
    throw new NotFound(`Product with id ${productId} not found!`);
  }
  res.json({
    status: "success",
    code: 200,
    data: { result },
  });
};

module.exports = getCfkFoodById;
