const mongoose = require("mongoose");
const { type } = require("os");
const { number } = require("zod");
const Schema = mongoose.Schema;

const adminSchema = new mongoose.Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  adminEmail: { type: String, unique: true, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Admin", adminSchema);
