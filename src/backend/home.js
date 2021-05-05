// Routes.js
// the API requests themselves for the home page

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	// temporary
	console.log(`Request from: ${req.originalUrl}`);
	res.status(200).json({ results: { "hello": "world", "route": "home" } });
	
	// change above to returning a different object like some html components
});

module.exports = router;