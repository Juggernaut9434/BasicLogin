// Routes.js
// the API requests themselves for the home page

import express from "express";

const router = express.Router();

// hello world get request
router.get("/", (req, res) => {
	res.status(200).json({ results: { "hello": "world" } });
});

export default router;