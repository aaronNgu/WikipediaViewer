// var http = require('http');
// var fs = require('fs');
//
// var server = http.createServer(function(req,res){
//
//   res.writeHead(200, {'Content-Type' : 'text/html'});
//
//   var myReadStream = fs.createReadStream(__dirname + '/wikipediaViewer.html', 'utf8');
//
//   myReadStream.pipe(res);
//
// });

//server.listen(3000,'127.0.0.1');
//
var express = require('express');
var app = express();
var path = require('path');

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+ '/wikipediaViewer.html'));
});

app.use(express.static(__dirname));

app.listen(3000);
