const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const cfkFoodSchema = new Schema(
  {
    nameFood: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
cfkFoodSchema.post("save", handleMongooseError);

module.exports = model("cfk", cfkFoodSchema);
