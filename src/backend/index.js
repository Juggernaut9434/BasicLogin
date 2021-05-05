// index.js
// the "main" equivalent
// Runs the backend scripts

const express = require("express");

const homeRoutes = require('./home');
const usersRoutes = require('./users');

const backendPort = 3001;

const app = express();

app.use('/users', usersRoutes);
app.use(homeRoutes);

app.listen(backendPort);