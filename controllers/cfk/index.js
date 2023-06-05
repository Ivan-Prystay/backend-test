const { ctrlWrapper } = require("../../helpers");

const getCfkFoodById = require("./getCfkFoodById");
const listCfkFoods = require("./listCfkFoods");

module.exports = {
  listCfkFoods: ctrlWrapper(listCfkFoods),
  getCfkFoodById: ctrlWrapper(getCfkFoodById),
};
