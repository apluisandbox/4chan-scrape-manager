const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser")

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static("public"));

app.get("/", function(req, res) {

  res.render("home")
})


app.post("/", function(req, res) {
  const thread = {
    "inputThread": req.body.input,
  }
  console.log(thread);
  res.render("home", thread)

});

app.listen(3000, function(req, res) {
  console.log("Server started on port 3000.");
})
