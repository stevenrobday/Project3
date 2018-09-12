const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

// Matches with "/api/articles"
router.route("/")
    .get(gamesController.findAll)
    .post(gamesController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(gamesController.find)
  .delete(gamesController.remove);

module.exports = router;
