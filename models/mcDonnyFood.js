const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const mcDonnysSchema = new Schema(
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
mcDonnysSchema.post("save", handleMongooseError);

module.exports = model("mc-donny", mcDonnysSchema);
