const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 9001;

const categories = require("./data/categories.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef Hunter is Working on server.");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});
app.listen(port, () => {
  console.log(`Chef is running on server port: ${port}`);
});
