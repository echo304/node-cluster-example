var http = require('http');

http.createServer((req, res) => {
  var startTime = Date.now();
  var endTime;
  
  // Expensive server work
  for(var i = 0; i < 10000000; i++) {
    endTime = Date.now()
  }
  res.writeHead(200, defaultCorsHeaders);
  res.end(`process ${process.pid} says hello! \n time: ${endTime - startTime}`);
}).listen(8001);


// Test Purpose
var defaultCorsHeaders = {
  "access-control-allow-origin": '*',
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept, x-parse-application-id, x-parse-rest-api-key",
  "access-control-max-age": 10 // Seconds.
};