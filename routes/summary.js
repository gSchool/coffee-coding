var express = require("express");
var router = express.Router();

router.post("/", function(request, response){
    response.render("summary", {title: "Summary - Huckleberry"});
});

module.exports = router;
