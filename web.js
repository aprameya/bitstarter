#!/usr/bin/env node

var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  //var fileContents = fs.readFile('./index.html');
  //response.send(fileContents.toString());
  response.send(fs.readFileSync('./index.html').toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
