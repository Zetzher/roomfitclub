const express = require("express");
const router = express.Router();
const User = require("../models/user");

//GET
router.get("/", (req, res, next) => {
  const userId = req.session.currentUser._id;
  User.findById(userId)
  .populate("entrenamientos")
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((err) => console.log("En metodo GET de profile ha ocurrido:", err));
});









module.exports = router;
