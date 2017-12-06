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
      res.status(err.status).end();
    } else {
      console.log(fileName);
    }
  })
})
//Get date and time and convert back
app.get("/:timestamp", function (req, res) {
  if (/[a-z]/i.test(req.params.timestamp.charAt(0))) {
    res.send(req.params)
  } else {
    res.sendFile('index.html');
  }
  
  
})

app.use('/public', express.static(process.cwd() + '/public'));

app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('404');
});

app.listen(port, function (){
  console.log("Listening on port: "  + port);
})
