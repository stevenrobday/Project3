const router = require("express").Router();
const userRoutes = require("./users");
const gameRoutes = require("./games");

// Book routes
router.use("/users", userRoutes);
router.use("/games", gameRoutes);

module.exports = router;
