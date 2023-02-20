const express = require("express");

const router = express.Router();

const { pizzas: controllers } = require("../../controllers");
const { auth } = require("../../middlewares");

router.get("/", auth, controllers.listPizzas);

router.get("/:pizzaId", controllers.getPizzaById);

module.exports = router;
