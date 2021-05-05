// Routes.js
// the API requests themselves for the home page

import express from "express";

const router = express.Router();

// hello world get request
router.get("/", (req, res) => {
	// temporary
	res.status(200).json({ results: { "hello": "world", "route": "home" } });
	
	// change above to returning a different object like some html components
});

export default router;