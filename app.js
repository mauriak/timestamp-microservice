var express = require('express');
var fs = require('fs');
var path = require('path');
var port = process.env.PORT || 3000
var app = express();

app.get("/", function (req, res) {
  var fileName = path.join(__dirname, 'views', 'index.html');
  res.sendFile(fileName, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      
    }
  }) 
})
//Get date and time and convert back
app.get("/:timestamp", function (req, res) {
  var dateVal = req.params.timestamp;
  var dateFormattingOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  if (isNaN(dateVal)) {
    var naturalDate = new Date(dateVal);
    if (!isNaN(naturalDate)) {
    naturalDate = naturalDate.toLocaleDateString('en-us', dateFormattingOptions)
    }
    
    var unixDate = new Date(dateVal).getTime()/1000;
  } else {
    var unixDate = dateVal;
    var naturalDate = new Date(dateVal * 1000);
    naturalDate = naturalDate.toLocaleDateString('en-us', dateFormattingOptions)
  }
  
  res.json({unix: unixDate, natural: naturalDate});
  
  
});

app.use('/public', express.static(process.cwd() + '/public'));

app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('404');
});

app.listen(port, function (){
  console.log("Listening on port: "  + port);
})
