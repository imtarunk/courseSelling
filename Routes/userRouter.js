const { Router } = require("express");

const userRouter = Router();

userRouter.post("/login", function (req, res) {
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

userRouter.post("/signup", function (req, res) {
  const { fullname, email, password } = req.body;

  res.send("this is singup page");
});

// Use UserAuth without parentheses
userRouter.post("/purchase", UserAuth, function (req, res) {
  res.send("This is the purchase page, and you're authorized!");
});

userRouter.post("/my-purchase", function (req, res) {
  res.send("This is story");
});

module.exports = {
  userRouter: userRouter,
};
