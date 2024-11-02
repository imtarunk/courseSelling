const { Router } = require("express");

const adminRouter = Router();

adminRouter.post("/login", (req, res) => {
  res.send("This is admin");
});

adminRouter.post("/signup", (req, res) => {
  res.send("This is admin");
});

adminRouter.post("/add-course", (req, res) => {
  res.send("This is admin");
});

adminRouter.post("/create-course", (req, res) => {
  res.send("This is admin");
});

adminRouter.post("/delete-course", (req, res) => {
  res.send("This is admin");
});

module.exports = {
  adminRouter: adminRouter,
};
