var express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const messageInterface = require("./router/messageInterface");
app.use("/", messageInterface);

app.listen(9001, function() {
  console.log("Server Express Ready!");
});
