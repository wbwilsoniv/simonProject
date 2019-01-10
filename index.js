const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}, in ${app.get("env")} mode.`);
});

app.use(express.static(path.join(__dirname)));
app.use("/sounds", express.static(__dirname + "/sounds"));

app.get("/", function(req, res) {
  res.sendFile(path.join("index.html"));
});
