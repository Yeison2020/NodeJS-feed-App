const express = require("express");

// Importing Controller files

const feedController = require("../controller/feed");

const router = express.Router();
// Routes HTTP

// GET /feed/posts
router.get("/posts", feedController.getPosts);

// Posts /feed/posts

router.post("/posts", feedController.createPost);

// Fecthing a list of posts

module.exports = router;
