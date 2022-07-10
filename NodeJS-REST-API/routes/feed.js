const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

// Importing Controller files

const { createPost, getPosts } = require("../controller/feed");

// Routes HTTP

// GET /feed/posts
router.get("/", getPosts);

// Posts /feed/posts

router.post(
  "/",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  createPost
);

// Fecthing a list of posts
module.exports = router;
