const jwt = require("jsonwebtoken");
const express = require("express");
const { userRouter } = require("./Routes/userRouter");
const { adminRouter } = require("./Routes/adminRoute");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/v1/", userRouter);
app.use("/api/v1/admin", adminRouter);

const main = async () => {
  await mongoose.connect(process.env.mongoose_URI);
  console.log("db connected");

  app.listen(process.env.PORT, () => {
    console.log(`Backend is running on port ${process.env.PORT}`);
  });
};

main();
