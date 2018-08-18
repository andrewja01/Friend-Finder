var express = require("express");
var app = express();
var PORT = 3000;
var path = require("path");

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });


  // Basic route that sends the user to the home page
app.get("/", function(req, res) {
    res.sendFile(path.join("../public/", "home.html"));
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });