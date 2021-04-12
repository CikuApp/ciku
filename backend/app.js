const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// import routes
const authRoute = require("./routes/auth");
const dashboardRoute = require("./routes/dashboard");

const app = express();
const port = 8000;
dotenv.config();

// Connect to MongoDB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(express.json());
app.use(express.static("build"));
app.use("/user", authRoute);
app.use("/dashboard", dashboardRoute);

app.listen(port);
