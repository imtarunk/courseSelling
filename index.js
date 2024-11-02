const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();
app.use(express.json());

app.post("/login", function (req, res) {
  const { email, password } = req.body;
  try {
  } catch (error) {}

  res.send("this is login page");
});

app.post("/signup", function (req, res) {
  const { fullname, email, password } = req.body;

  res.send("this is singup page");
});

app.post("/purchase", function (req, res) {
  res.send("This is story");
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
