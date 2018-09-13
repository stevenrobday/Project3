const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/articles"
router.route("/")
  .post(usersController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(usersController.find);

router
  .route("/findone/:id")
  .get(usersController.findOne);

router
  .route("/user/:id")
  .get(usersController.getUser);

router
  .route("/wishlist/:userid/:gameid")
  .delete(usersController.deleteWishlist);

router
  .route("/owned/:userid/:gameid")
  .delete(usersController.deleteOwned);

module.exports = router;
