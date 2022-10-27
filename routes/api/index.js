const router = require("express").Router();
// const categoryRoutes = require("./category-routes");
// const tagRoutes = require("./tag-routes");

// router.use("/categories", categoryRoutes);
// router.use("/tags", tagRoutes);

const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
