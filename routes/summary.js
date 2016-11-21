var express = require("express");
var router = express.Router();
var data = require("../data/orders");
var user = require("../data/user");

router.get("/", function(request, response){
    data.getOrder(user).then(function(order){
        response.render("summary", {
            title: "Summary - Huckleberry",
            order: order,
            helpers: {
                to2: data.to2
            }
        });
    });
});

module.exports = router;
