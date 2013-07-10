var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

// cache file contents
var indexHtmlStr = fs.readFileSync("index.html").toString("utf-8");

app.get('/', function(request, response) {
  response.send(indexHtmlStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
