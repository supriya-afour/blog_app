const express = require('express');
const path = require("path");

const app = express();
const PORT = 3000;
app.use(express.static(__dirname + '/assets'));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname) });
});

app.get("/about_npm", (req, res) => {
  res.sendFile("about_npm.html", { root: path.join(__dirname) })
})

app.get("/introducing_node", (req, res) => {
  res.sendFile("introducing_node.html", { root: path.join(__dirname) })
})


app.listen(PORT, (req, res) => {
  console.log(`Your server is running on ${PORT}`)
});
