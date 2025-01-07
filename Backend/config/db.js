const mongoose = require("mongoose"); // CJS
require("dotenv").config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = connectDB;