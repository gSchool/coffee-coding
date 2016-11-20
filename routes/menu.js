var express = require("express");
var router = express.Router();

router.get("/", function(request, response){
    response.render("menu", {title: "Menu - Huckleberry"});
});

module.exports = router;
