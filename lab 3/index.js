var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require('express');

const hostname = 'localhost';
const port = 8080;

var server = express();

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile('./index.html', function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  }); // you can use 'return' to ensure you stop after the (first) callback
}).listen(8080); 

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})