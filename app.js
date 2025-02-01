const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world, thy welcomes you!");
});

const port = 3000;
app.listen(port, () => {
  console.log("my first express app - listening to port 3000 and watch mode ");
});
