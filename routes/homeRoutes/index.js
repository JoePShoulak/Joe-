const router = require("express").Router();
const { Post, Comment } = require("../../models");

router.get("/", async (req, res) => {
  const postData = await Post.findAll({
    include: [{ model: Comment }],
  }).catch((err) => {
    res.json(err);
  });

  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("all", { posts });
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
