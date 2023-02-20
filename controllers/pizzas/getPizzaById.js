const { Pizza } = require("../../models");

const getPizzaById = async (req, res, next) => {
  try {
    const { pizzaId } = req.params;
    const result = await Pizza.findById(pizzaId);
    if (!result) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Pizza with id ${pizzaId} not found`,
      });
      return;
    }
    res.json({
      status: "success",
      code: 200,
      data: { result },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Server error",
    });
  }
};
module.exports = getPizzaById;
