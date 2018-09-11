//db controller

const db = require("../models");

module.exports = {
  // findAll: function (req, res) {
  //   db.Article
  //     .find({})
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // find: function (req, res) {
  //   db.Article
  //     .find({ timesID: req.params.id })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  find: function (req, res) {
    db.Users
      .find({ username: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  // ,
  // remove: function (req, res) {
  //   db.Article
  //     .findOne({ timesID: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
