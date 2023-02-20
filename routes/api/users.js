const express = require("express");

const router = express.Router();

const { auth } = require("../../middlewares");
const { users: controllers } = require("../../controllers");

router.get(
  "/current",
  auth,
  controllers.getCurrentUser
);

module.exports = router;
