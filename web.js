var express = require('express');
var fs = require('fs');
var index_file = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var content=fs.readFileSync(index_file);
  response.send(content.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
