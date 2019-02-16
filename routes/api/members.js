const express = require('express')
const router = require("express").Router();
const membersController = require("../../controllers/membersController");
const passport = require('../passport')

// Matches with "/api/members"
router.route("/")
  .get(membersController.findAll)
  .post(membersController.create);

// Matches with "/api/members/:id"
router
  .route("/:id")
  .get(membersController.findById)
  .put(membersController.update)
  .delete(membersController.remove);

module.exports = router;