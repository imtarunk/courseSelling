const jwt = require("jsonwebtoken");
const express = require("express");
const UserAuth = require("./middleware/auth");
const AdminAuth = require("./middleware/auth");
const { config } = require("dotenv");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

mongoose.connect(
  "mongodb+srv://peerlink:<db_password>@peerlink.a5gb7.mongodb.net/"
);
const app = express();
app.use(express.json());

app.post("/login", function (req, res) {
  const { email, password } = req.body;
  try {
    const token = jwt.sign({ email }, process.env.jwtKey, { expiresIn: "1h" });
    res.status(200).json({
      success: true,
      message: "Login successful",
      token: token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "An error occurred during login",
    });
  }

  res.send("this is login page");
});

app.post("/signup", function (req, res) {
  const { fullname, email, password } = req.body;

  res.send("this is singup page");
});

// Use UserAuth without parentheses
app.post("/purchase", UserAuth, function (req, res) {
  res.send("This is the purchase page, and you're authorized!");
});

app.post("/my-purchase", function (req, res) {
  res.send("This is story");
});

// This is admin code

app.post("/admin/login", (req, res) => {
  res.send("This is admin");
});

app.post("/admin/signup", (req, res) => {
  res.send("This is admin");
});

app.post("/admin/add-course", (req, res) => {
  res.send("This is admin");
});

app.post("/admin/create-course", (req, res) => {
  res.send("This is admin");
});

app.post("/admin/delete-course", (req, res) => {
  res.send("This is admin");
});

app.listen(3000);
