//const chan = require("4chan");
const express = require("express");
const app = express();
const ejs = require("ejs");

app.set('view engine', 'ejs')
app.use(express.static("public"));

app.get("/", function(req, res) {

res.render("home")
})




app.listen(3000, function(req, res) {
  console.log("Server started on port 3000.");
})
