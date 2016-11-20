var express = require("express");
var router = express.Router();

router.post("/", function(request, response){
    response.redirect("/confirmation");
});
router.get("/", function(request, response){
    response.render("orders", {title: "Orders - Huckleberry"});
});

module.exports = router;
