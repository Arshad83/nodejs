var http=require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type': 'text/html'});
		
//res.write("Hello World!");// write response to client
res.write(req.url);
res.end();// end response
}).listen(8080);