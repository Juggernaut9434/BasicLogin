// index.js
// the "main" equivalent
// Runs the backend scripts

// external import
const express = require("express");

// internal import
const homeRoutes = require('./home');
const usersRoutes = require('./users');

const backendPort = 3001;
const app = express();

// connect the routes to the app
app.use('/users', usersRoutes);
app.use(homeRoutes);

// localhost:3001 is an example
app.listen(backendPort);