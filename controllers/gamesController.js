const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Games
      .find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  returnGame: function (req, res) {
    db.Games
      .find({ giantbombid: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addWishlist: function (req, res) {
    db.Games
      .findOneAndUpdate(req.body, req.body, { new: true, upsert: true })
      .then(dbModel => {
        return db.Users.findOneAndUpdate({ _id: req.params.id }, { $push: { wishlist: dbModel._id } });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addOwned: function (req, res) {
    db.Games
      .findOneAndUpdate(req.body, req.body, { new: true, upsert: true })
      .then(dbModel => {
        return db.Users.findOneAndUpdate({ _id: req.params.id }, { $push: { owned: dbModel._id } });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  remove: function (req, res) {
    db.Games
      .findOne({ gamesID: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
