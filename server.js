const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
