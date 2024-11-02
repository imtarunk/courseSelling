const jwt = require("jsonwebtoken");
const express = require("express");
const UserAuth = require("./middleware/auth");
const AdminAuth = require("./middleware/auth");
const { default: mongoose } = require("mongoose");
const { userRouter } = require("./Routes/userRouter");
const { adminRouter } = require("./Routes/adminRoute");

require("dotenv").config();

mongoose.connect(
  "mongodb+srv://peerlink:<db_password>@peerlink.a5gb7.mongodb.net/"
);
const app = express();
app.use(express.json());

app.use("/api/v1/", userRouter);
app.use("/api/v1/admin", adminRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
