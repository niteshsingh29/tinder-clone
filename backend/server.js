const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Tinder = require("./mongoose_connection/mongoose");
const port = process.env.PORT || 8000;

app.get("/", (req, res, next) => {
  res.status(200).send("sending from backend");
  console.log("hey");
});
app.listen(port, () => {
  console.log("listening on port " + port);
});
