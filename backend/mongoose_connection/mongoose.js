const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/tinder", {})
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err.message);
  });

const schema = new mongoose.Schema({
  img: String,
  name: String,
});

const Tinder = new mongoose.model("Tinder", schema);

module.exports = Tinder;
