const bcrypt = require("bcryptjs");
const { User } = require("../../models");

const signup = async (req, res) => {
  try {
    const { name, phone, password, email = "" } = req.body;

    const user = await User.findOne({ phone });
    if (user) {
      res.status(409).json({
        status: "error",
        code: 409,
        message: `User with ${phone} already exist`,
      });
      return;
    }
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    await User.create({ name, email, password: hashPassword, phone });
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        user: {
          phone,
          name,
          email
        },
      },
    });
  } catch {
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Server error",
    });
  }
};
module.exports = signup;
