var express = require('express');
var fs = require('fs');
var path = require('path');
var port = process.env.PORT
var app = express();

app.get("/", function (req, res) {
  var fileName = path.join(__dirname, 'views', 'index.html');
  res.sendFile(fileName, function (err) {
    if (err) {
      console.log(err);
    res.status(err.status)
    }
  })
})

app.listen(port, function (){
  console.log("Listening on port: "  + port);
})
