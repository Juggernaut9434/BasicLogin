// users.js
// the API requests themselves for users

const express = require("express");

const router = express.Router();

// hello world get request
router.get("/", (req, res) => {
	res.status(200).json({ results: { "hello": "world", "route": "users" } });
});

module.exports = router;
