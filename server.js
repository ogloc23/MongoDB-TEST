const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello Node API");
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
