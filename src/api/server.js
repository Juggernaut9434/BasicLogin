// Server.js
// Open a port for the app to listen to

// define variables
var express = require('express'),
	app = express,
	port = process.env.PORT || 3000;

// have app listen to this port
app.listen(port);

// logging
console.log("api server started on port: " + port);
