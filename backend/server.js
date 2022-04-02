const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Tinder = require("./mongoose_connection/mongoose");
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.status(200).send("sending from backend");
});

app.post("/tinder-api", async (req, res, next) => {
  try {
    const result = req.body;
    const document = new Tinder(result)
    const sendData = await Tinder.create(document)
    res.status(201).send(result)
  } catch (err) {
    console.log(err.message);
  }
});
app.listen(port, () => {
  console.log("listening on port " + port);
});
