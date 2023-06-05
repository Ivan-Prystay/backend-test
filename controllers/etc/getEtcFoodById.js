const { NotFound } = require("http-errors");
const { EtcFood } = require("../../models");

const getEtcFoodById = async (req, res) => {
  console.log("req.params: ", req.params);
  const { productId } = req.params;
  console.log("productId: ", productId);
  const result = await EtcFood.findById(productId);
  if (!result) {
    throw new NotFound(`Product with id ${productId} not found!`);
  }
  res.json({
    status: "success",
    code: 200,
    data: { result },
  });
};

module.exports = getEtcFoodById;
