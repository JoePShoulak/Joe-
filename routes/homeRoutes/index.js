const router = require("express").Router();
const { Post, Comment, User } = require("../../models");

router.get("/", async (req, res) => {
  const postData = await Post.findAll({
    include: [{ model: Comment }],
  }).catch((err) => {
    res.json(err);
  });

  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("all", { posts, loggedIn: req.session.loggedIn });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});
module.exports = router;
