// Q5.Creating module and import & export.
// var demoModule=require("./test-module.js");
// demoModule.myfunc();

// Q6.Creating a http server.

const http = require('http');
const fs = require('fs');
var server=http.createServer(function (req, response)
 {
    fs.readFile('http.txt', function(err, content) 
    {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(content);
            response.end();
  });
})
server.listen(2000);
console.log("Server is listening at PORT 2000.");


