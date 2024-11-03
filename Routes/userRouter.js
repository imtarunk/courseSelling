const { Router } = require("express");
const UserAuth = require("../middleware/auth");
const userRouter = Router();
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const z = require("zod");

userRouter.post("/login", async (req, res) => {
  try {
    // Destructure email and password from the request body
    const { email, password } = req.body;

    // Find the user by email in the database
    const findUser = await User.findOne({ email });

    // If user does not exist, return an error response
    if (!findUser) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, findUser.password);

    // If the password is incorrect, return an error response
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate a JWT token for the authenticated user
    const idOfLogedUser = findUser._id;
    const token = jwt.sign({ idOfLogedUser }, process.env.jwtKey, {
      expiresIn: "1h",
    });

    // Return a success response with the token
    res.status(200).json({
      success: true,
      message: "Login successful",
      token: token,
      idOfLogedUser,
    });
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.errors,
      });
    }

    // Handle other unexpected errors
    console.error("Unexpected error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Define the Zod schema for signup validation
const signupSchema = z
  .object({
    fName: z.string().min(1, "First name is required"),
    lName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confPassword: z
      .string()
      .min(6, "Confirmation password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confPassword, {
    message: "Passwords do not match",
    path: ["confPassword"],
  });

// Define the /signup route
userRouter.post("/signup", async (req, res) => {
  try {
    // Validate the request body
    const { fName, lName, email, password } = signupSchema.parse(req.body);

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already registered",
      });
    }

    // Hash the password
    const hash = await bcrypt.hash(password, 5);

    // Create a new user
    const newUser = await User.create({
      fName,
      lName,
      email,
      password: hash,
    });

    return res.status(201).json({
      success: true,
      message: "User signed up successfully",
      user: newUser,
    });
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.errors,
      });
    }

    // Handle other unexpected errors
    console.error("Unexpected error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Use UserAuth without parentheses for protected routes
userRouter.post("/purchase", UserAuth, (req, res) => {
  res.send("This is the purchase page, and you're authorized!");
});

userRouter.post("/my-purchase", (req, res) => {
  res.send("This is my purchase story");
});

module.exports = {
  userRouter: userRouter,
};
