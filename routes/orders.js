var express = require("express");
var router = express.Router();
var data = require("../data/orders");
var user = require("../data/user");

router.post("/", function(request, response){
    data.getOrder(user).then(function(order){
        return order.confirm();
    }).then(function(orderItem){
        response.redirect("/confirmation");
    }).catch(console.error);
});
router.get("/", function(request, response){
    data.getOrders().then(function(orders){
        response.render("orders", {
            title: "Orders - Huckleberry",
            orders: orders,
            helpers: {
                to2: data.to2
            }
        });
    }).catch(console.error);
});

module.exports = router;
