const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Games
      .find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  find: function (req, res) {
    db.Games
      .find({ gamesID: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Games
      .findOneAndUpdate(req.body, req.body, { new: true, upsert: true })
      .then(dbModel => {
        return db.Users.findOneAndUpdate({ username: req.params.username }, { $push: { wishlist: dbModel._id } });
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
