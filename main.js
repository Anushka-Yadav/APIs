var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write('{"name":"Anushka"} API by nodejs');
    res.end();
}).listen(5000)
