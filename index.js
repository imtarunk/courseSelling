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
  await mongoose.connect(
    "mongodb+srv://tarunshr145:MXhoRQK9L3S7iEB0@cluster0.zuk69.mongodb.net/Versity"
  );
  console.log("db connected");

  app.listen(3000, () => {
    console.log("server is running on port 3000");
  });
};

main();
