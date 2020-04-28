Q6.
const http = require('http');
const fs = require('fs');
var server=http.createServer(function (req, response)
 {
    fs.readFile('http.txt', function(err, content) 
    {
        if(err){alert("error");}
        else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(content);
            response.end();}
  });
})
server.listen(2000);
console.log("Server is listening");


