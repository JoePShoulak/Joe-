const router = require("express").Router();
// const categoryRoutes = require("./category-routes");
// const tagRoutes = require("./tag-routes");

// router.use("/categories", categoryRoutes);
// router.use("/tags", tagRoutes);

const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);

module.exports = router;
