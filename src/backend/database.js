// database.js
// the database logic - LowDB
// accredidation toward cypress-io/cypress-real-world-app for several lines of code

// imports
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const path = require("path");
const bcrypt = require("bcryptjs");
const shortid = require("shortid");
const fs = require("fs");

import { v4 } from "uuid";

const databaseFile = path.join(__dirname, "../data/database.json");
const adapter = new FileSync(databaseFile);
const db = low(adapter);

// seed the database
export const seedDb = () => {

    // parse the JSON seed
    const dbSeed = JSON.parse(
        fs.readFileSync("../data/database-seed.json")
    );

    // write the seed into the current database
    db.setState(dbSeed).write();
    return;
};

// create user
export const createUser = (userDetails) => {

    // encrypt the password in the db
    const password = null; // TODO , fill
    
    // make user object.
    const user = {
        id: shortid(),
        uuid: v4(),
        username: userDetails.username,
        password,
        createdAt: new Date(),
        modifiedAt: new Date()
    };

    saveUser(user);
    return user;
};

// save user to database



// get user

// update user

// remove user