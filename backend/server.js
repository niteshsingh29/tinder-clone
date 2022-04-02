const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Tinder = require("./mongoose_connection/mongoose");
const port = process.env.PORT || 8000;


app.use(express.json())
app.use(cors())

app.get("/", (req, res, next) => {
  res.status(200).send("sending from backend");
});
app.listen(port, () => {
  console.log("listening on port " + port);
});
