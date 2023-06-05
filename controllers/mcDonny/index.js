const { ctrlWrapper } = require("../../helpers");

const getMcDonnyFoodById = require("./getMcDonnyFoodById");
const listMcDonnyFoods = require("./listMcDonnyFoods");

module.exports = {
  listMcDonnyFoods: ctrlWrapper(listMcDonnyFoods),
  getMcDonnyFoodById: ctrlWrapper(getMcDonnyFoodById),
};
