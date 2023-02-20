const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
    },
    email: {
      type: String,
      required: false,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionkey: false, timestamps: true }
);

const User = model("user", userSchema);

const joiLoginSchema = Joi.object({
  phone: Joi.string().required(),
  password: Joi.string().required(),
});

const joiSignUpSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string(),
});

module.exports = {
  User,
  joiSignUpSchema,
  joiLoginSchema,
};
