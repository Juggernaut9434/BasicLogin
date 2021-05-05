// database.js
// the database logic - LowDB
// accredidation toward cypress-io/cypress-real-world-app for several lines of code

// imports
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const path = require("path");


const databaseFile = path.join(__dirname, "../data/database.json");
const adapter = new FileSync<DbSchema>(databaseFile);
const db = low(adapter);

// seed the database

// create user

// save user to database

// get user

// update user

// remove user