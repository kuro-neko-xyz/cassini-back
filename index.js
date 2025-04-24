const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/feed", (_, res) => {
  res.send(Math.random().toString());
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
