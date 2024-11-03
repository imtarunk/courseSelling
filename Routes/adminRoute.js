const { Router } = require("express");
const Admin = require("../models/adminSchema");
const adminRouter = Router();
const z = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

adminRouter.post("/login", async (req, res) => {
  try {
    // Destructure email and password from the request body
    const { adminEmail, password } = req.body;

    // Find the user by email in the database
    const findAdmin = await Admin.findOne({ adminEmail });

    // If user does not exist, return an error response
    if (!findAdmin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, findAdmin.password);

    // If the password is incorrect, return an error response
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Generate a JWT token for the authenticated user
    const idOfLogedUser = findAdmin._id;
    const token = jwt.sign({ idOfLogedUser }, process.env.JWT_ADMIN_KEY, {
      expiresIn: "1h",
    });

    // Return a success response with the token
    res.status(200).json({
      success: true,
      message: `Login successful welcome back ${findAdmin.fName}`,
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

const signupSchema = z
  .object({
    fName: z.string().min(1, "First name is required"),
    lName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Invalid phone number"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confPassword: z
      .string()
      .min(6, "Confirmation password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confPassword, {
    message: "Passwords do not match",
    path: ["confPassword"],
  });

adminRouter.post("/signup", async (req, res) => {
  try {
    // Validate the request body
    const { fName, lName, email, phone, password } = signupSchema.parse(
      req.body
    );

    // Check if the user already exists
    const existingUser = await Admin.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Admin already registered",
      });
    }

    // Hash the password
    const hash = await bcrypt.hash(password, 5);

    // Create a new user
    const newUser = await Admin.create({
      fName,
      lName,
      adminEmail: email,
      phone,
      password: hash,
    });

    return res.status(201).json({
      success: true,
      message: "Admin signed up successfully",
      admin: newUser,
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
