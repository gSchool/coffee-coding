var express = require("express");
var router = express.Router();

router.get("/", function(request, response){
    response.render("confirmation", {title: "Confirmation - Huckleberry"});
});

module.exports = router;
