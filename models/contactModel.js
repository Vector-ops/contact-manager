const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide contact name"],
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
    },
    phone: {
      type: String,
      required: [true, "Please provide phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
