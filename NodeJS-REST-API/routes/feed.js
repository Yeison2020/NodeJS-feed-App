const express = require("express");
const { body } = require("express-validator");

// Importing Controller files

const feedController = require("../controller/feed");

const router = express.Router();
// Routes HTTP

// GET /feed/posts
router.get("/", feedController.getPosts);

// Posts /feed/posts

router.post(
  "/",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

// Fecthing a list of posts

module.exports = router;
