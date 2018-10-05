// required dependencies
var express = require("express");

var router = express.Router();

// Import the model burguer.js to use its database functions
var burger = require("../models/burger");


// Creating the routes

// Route for selectAll
router.get("/", function (_req, res) {
  burger.selectAll(function (data) {
    var newObject = {
      burgers: data
    };
    console.log(newObject);
    res.render("index", newObject);
  });
});

// Route for insertOne (Creating new Burger)
router.post("/api/burgers", function (req, res) {
  burger.insertOne(
[req.body.burger_name],
    function (result) {
      res.json({
        id: result.insertId
      });
    });
});

// Route for updateOne (Devouring burger)
router.put("/api/burgers/:id", function (req, _res) {
  var condition = "id = " + req.params.id;
  burger.updateOne(
    [req.body.devoured], condition,
    function (res) {
      res.redirect('/');
  })
});

// Export routes for server.js to use.
module.exports = router;