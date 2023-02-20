const { Schema, model } = require("mongoose");
const Joi = require("joi");

const pizzaSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Set title for pizza"],
    },
    imageUrl: {
      type: String,
      required: [true, "Set image for pizza"],
    },
    types: {
      type: Array,
      required: [true, "Set types for pizza"],
    },
    sizes: {
      type: Array,
      required: [true, "Set sizes for pizza"],
    },
    category: {
      type: Number,
      required: [true, "Set category for pizza"],
    },
    rating: {
      type: Number,
      default: 0,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionkey: false, timestamps: true }
);

const joiPizzaShema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const Pizza = model("pizza", pizzaSchema);

module.exports = {
  Pizza,
  joiPizzaShema,
};
