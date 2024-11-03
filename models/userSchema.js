const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fName: {
    type: String,
    required: true,
    trim: true,
  },
  lName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  coursesPurchase: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course", // Refers to the Course model
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
