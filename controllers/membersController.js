const express = require('express')
const db = require("../models");
const passport = require('../passport')

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.Members
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
 
  findById: function(req, res) {
    db.Members
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//findByUsername
 
/*findOne: function(req, res) {
  db.Members
    .findByUsername(req.params.username)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

},*/

//end findByUsername
  create: function(req, res) {
    db.Members
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Members
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Members
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
