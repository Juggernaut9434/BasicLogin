// Server.js
// Open a port for the app to listen to

const homeRoutes = require('./home');
const usersRoutes = require('./users');

// define variables
var express = require('express'),
	app = express,
	port = process.env.PORT || 3000;

// have app listen to this port
app.listen(port);

/*
 * use the routes from home and users files
 * so /users/ will bring a certain home page
 * and /users/delete?userId=# 
**/
app.use('/users', usersRoutes);
app.use('/', homeRoutes)

// logging
console.log("api server started on port: " + port);
