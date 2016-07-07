var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {

	if (req.method === "GET") {
        console.log('if (req.method === "GET") { CALLED =========');
        
		res.writeHead(200, {"Content-Type": "text/html"});
	    fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
	} else if (req.method === "POST") {
        console.log('} else if (req.method === "POST") { CALLED =========');

		var body = "";

		req.on("data", function(chunk) {
			body += chunk;
		});

		req.on("end", function() {

			res.writeHead(200, {"Content-Type": "text/html"});

			res.end(`

				<!DOCTYPE html>
				<html>
					<head>
						<title>Form Results</title>
					</head>
					<body>
						<h1>Your Form Results</h1>
						<p>${body}</p>
					</body>
				</html>

			`);


		});


	}

	

}).listen(3000);

console.log("Form server listening on port 3000");
