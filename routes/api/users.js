const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/articles"
router.route("/")
  .post(usersController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(usersController.find);

module.exports = router;
