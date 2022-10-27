const router = require("express").Router();
const { Post, Comment, User } = require("../../models");

router.get("/", async (req, res) => {
  const postData = await Post.findAll({
    include: [{ model: Comment }],
  }).catch((err) => {
    res.json(err);
  });

  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("homepage", { posts, loggedIn: req.session.loggedIn });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/dashboard", async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [{ model: Comment }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("dashboard", {
      loggedIn: req.session.loggedIn,
      posts,
    });
  } catch (err) {
    res.redirect("/");
  }
});
module.exports = router;
