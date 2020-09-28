const http = require('http');

http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/' && req.method === "GET") {
    res.setHeader('Content-Type', 'application/json');
    console.log('---- New Access: ----');
    console.log(req.headers);
    console.log(req.connection.remoteAddress);
    console.log('==========================');
    res.end('yello');
  }
  
  else {
    res.writeHead(404);
    res.end('404');
  }
}).listen(80);
