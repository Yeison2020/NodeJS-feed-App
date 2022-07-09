exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        title: "first Posts",
        content: "This is the first post Data",
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  // Create post in db
  const title = req.body.title;
  const content = req.body.content;

  res.status(201).json({
    message: "Post created in the db successfully",
    post: [
      {
        title: title,
        content: content,
        id: new Date().toISOString(),
      },
    ],
  });
};
