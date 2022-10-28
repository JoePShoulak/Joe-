const router = require("express").Router();
const { Post, Comment, User } = require("../../models");

router.get("/", async (req, res) => {
  const postData = await Post.findAll({
    include: [{ model: Comment, include: [{ model: User }] }, { model: User }],
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
      include: [{ model: Comment, model: User }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("dashboard", {
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
      posts,
    });
  } catch (err) {
    res.redirect("/");
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: Comment, include: [{ model: User }] },
        { model: User },
      ],
    });

    const post = postData.get({ plain: true });
    res.render("post", {
      loggedIn: req.session.loggedIn,
      post,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.redirect("/");
  }
});
module.exports = router;
