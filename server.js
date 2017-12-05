//This file is required for node

var express = require('express');
var app = express();

app.get('/timestamp', function(req, res) {
  res.send("timestamp");
})


app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});

