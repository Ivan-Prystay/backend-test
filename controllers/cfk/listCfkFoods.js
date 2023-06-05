const { CfkFood } = require("../../models");

const listCfkFoods = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const result = await CfkFood.find(
    
    {
      skip,
      limit,
    }
  );

  if (!result) {
    throw new Error("Server error");
  }

  res.json({
    status: "success",
    code: 200,
    data: { result },
  });
};

module.exports = listCfkFoods;
