require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;
const routes = require("./routes/routes");

mongoose.connect(mongoURI).then(() => console.log("Database Connected....."));

const app = express();
app.use(express.json());

app.use("/api", routes);

app.listen(5000, () => {
  console.log(`Server Strted on port 5000`);
});
