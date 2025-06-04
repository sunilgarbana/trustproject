const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();


app.use(express.static(path.join(__dirname, "view")));
app.use("/styles", express.static(path.join(__dirname, "styles")));
app.use("/scripts", express.static(path.join(__dirname, "scripts")));
app.use("/images", express.static(path.join(__dirname, "images")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view", "home.html"));
});
app.get("/gallery", (req, res) => {
    res.sendFile(path.join(__dirname, "view", "gallery.html"));
});
app.get("/history", (req, res) => {
    res.sendFile(path.join(__dirname, "view", "history.html"));
});
app.listen(8000, () => {
  console.log("Server running at http://localhost:8000/");
});
