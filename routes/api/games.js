const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

// Matches with "/api/articles"
router.route("/")
    .get(gamesController.findAll);

// Matches with "/api/articles/:id"
router
  .route("/:username")
  .post(gamesController.create);
  // .delete(gamesController.remove);

module.exports = router;
