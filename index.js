const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "public/pages/home.html"));
});

app.get("/contact", (_, res) => {
  res.sendFile(path.join(__dirname, "public/pages/contact.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
