const express = require('express');
const path = require("path");

const app = express();
const PORT = 3000;
app.use(express.static(__dirname + '/assets'));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname) });
});

app.get("/create_sample_content", (req, res) => {
  res.sendFile("create_sample_content.html", { root: path.join(__dirname) })
})

app.get("/uploading_featured_images", (req, res) => {
  res.sendFile("uploading_featured_images.html", { root: path.join(__dirname) })
})


app.listen(PORT, (req, res) => {
  console.log(`Your server is running on ${PORT}`)
});
