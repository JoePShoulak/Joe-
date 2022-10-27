const router = require("express").Router();
const { Comment } = require("../../models");

// GET all comments
router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      // include: [{ model: LibraryCard }, { model: Book }],
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single comment
router.get("/:id", async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      // include: [{ model: LibraryCard }, { model: Book }],
    });

    if (!commentData) {
      res.status(404).json({ message: "No comment found with that id!" });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a comment
router.post("/", async (req, res) => {
  try {
    const commentData = await Comment.create(req.body);
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a comment
router.put("/:id", async (req, res) => {
  try {
    const commentData = await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!commentData[0]) {
      res.status(404).json({ message: "No comment with this id!" });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a comment
router.delete("/:id", async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: "No comment found with that id!" });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
