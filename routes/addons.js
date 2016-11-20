var express = require("express");
var router = express.Router();

router.post("/", function(request, response){
    response.render("addons", {title: "Add-ons - Huckleberry"});
});

module.exports = router;
