const { validationResult } = require("express-validator");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "first Posts",
        content: "This is the first post Data",
        imageUrl: "/image/posts.jpg",
        creator: { name: "Yeison Casado" },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({
        message: "Validation failed, entered data is incorrect.",
        errors: errors.array(),
      });
  }
  // Create post in db
  const title = req.body.title;
  const content = req.body.content;
  console.log(title, content);

  res.status(201).json({
    message: "Post created in the db successfully",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: "Enmanuel" },
      createdAt: new Date(),
    },
  });
};
