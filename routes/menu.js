var express = require("express");
var router = express.Router();
var menu = require("../data/menu");

router.get("/", function(request, response){
    response.render("menu", {
        title: "Menu - Huckleberry",
        coffee: menu.coffee,
        pastries: menu.pastries
    });
});

module.exports = router;
