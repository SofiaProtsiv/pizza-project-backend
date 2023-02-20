const { Pizza } = require("../../models");

const listPizzas = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { page = 1, limit = 5, favorite = true && false } = req.query;
    const skip = (page - 1) * limit;
    const pizzas = await Pizza.find(
      { owner: _id, favorite },
      "-createdAt -updatedAt",
      {
        skip,
        limit: Number(limit),
      }
    ).populate("owner", "name phone");
    res.json({
      status: "success",
      code: 200,
      data: {
        result: pizzas,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Server error",
    });
  }
};

module.exports = listPizzas;
