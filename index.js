var express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const message = require("./router/message");
app.use("/message", message);

app.listen(9001, function() {
  console.log("Server Express Ready!");
});
