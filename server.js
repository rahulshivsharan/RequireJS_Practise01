var connect = require("connect");
var serveStatic = require("serve-static");
var url = require('url');
var util = require('util');
var app = connect();

var server = (function(){
	
	var port = 3032; // On which Port the server should be running

	return {
		getPort : function(){
			return port;
		}
	}
})(); 

/////// CODE BLOCK USED TO GENERATE SVG FILES FROM COLOR-CODE PRESENT IN URL ////////////////////////
var svgTemplate = [
  '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="%d" height="%d">',
    '<ellipse cx="50%" cy="50%" rx="50%" ry="50%" fill="#%s"></ellipse>',
  '</svg>'
].join('');



app.use(function(req, res, next){	
	var pathname = url.parse(req.url).pathname;
	
	if (m = pathname.match(/^\/color\/([0-9a-fA-F]{6})/)) {
		
		res.writeHead(200, {'Content-Type': 'application/json'});
		var json = JSON.stringify({
			"message" : "Hello Brother"
		});
    	res.end(json);
	}

	next();
});
///////////////////////////////////////////////////////////////////////////////////////////////



app.use(serveStatic(__dirname + "/app")).listen(server.getPort(),function(){
	console.log(" server started at port "+server.getPort());
});

/*
  access the application using url as example

  http://localhost:3032/ex01/pages/1.html

*/