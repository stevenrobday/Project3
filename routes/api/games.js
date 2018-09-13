const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

// Matches with "/api/articles"
router.route("/")
    .get(gamesController.findAll);

router
    .route("/:id")
    .get(gamesController.returnGame);

// Matches with "/api/articles/:id"
router
  .route("/wishlist/:id")
  .post(gamesController.addWishlist);

router
  .route("/owned/:id")
  .post(gamesController.addOwned);
  // .delete(gamesController.remove);

module.exports = router;
