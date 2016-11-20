var express = require("express");
var router = express.Router();

router.get("/", function(request, response){
    response.render("login", {title: "Login - Huckleberry"});
});

module.exports = router;
