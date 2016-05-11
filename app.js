var cluster = require('cluster');
var http = require('http');

// Extract CPU info. from 'os' module
var numCPUs = require('os').cpus().length;

if(cluster.isMaster) {
  for(var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`process ${process.pid} says hello!`);
  }).listen(8000);
}