var express = require("express");
var router = express.Router();
var data = require("../data/orders");
var user = require("../data/user");

router.post("/", function(request, response){
    data.getOrder(user).then(function(order){
        var orderItem = {
            type: request.body.itemType,
            itemId: request.body.itemId
        }
        if (request.body.addonId){
            orderItem.addon = request.body.addonId;
        }
        return order.addToOrder(orderItem);
    }).then(function(orderItem){
        response.redirect("summary");
    }).catch(console.error);
});

module.exports = router;
