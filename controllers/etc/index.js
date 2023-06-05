const { ctrlWrapper } = require("../../helpers");

const getEtcFoodById = require("./getEtcFoodById");
const listEtcFoods = require("./listEtcFoods");

module.exports = {
  listEtcFoods: ctrlWrapper(listEtcFoods),
  getEtcFoodById: ctrlWrapper(getEtcFoodById),
};
