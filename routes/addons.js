var express = require("express");
var router = express.Router();
var menu = require("../data/menu");

router.post("/", function(request, response){
    response.render("addons", {
        title: "Add-ons - Huckleberry",
        addons: menu.addons,
        itemId: request.body.itemId
    });
});

module.exports = router;
