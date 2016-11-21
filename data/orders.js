var menu = require("./menu");

const TAX_RATE = 0.08;
var now = Date.now();

function OrderItem(properties){
    this.id = properties.id;
    this.name = properties.name;
    this.price = properties.price;
    this.addon = properties.addon;
}
function Order(properties){
    this.id = properties.id;
    this.orderTimestamp = properties.orderTimestamp;
    this.customer = properties.customer;
    this.confirmed = properties.confirmed || false;
    this.orderItems = properties.orderItems || [];
    this.orderDay = function(){
        return timestampToDate(this.orderTimestamp);
    };
    this.orderTime = function(){
        return timestampToTime(this.orderTimestamp);
    };
    this.getSubtotal = function(){
        return this.orderItems.reduce((previous, item) => previous + item.price, 0);
    };
    this.getTax = function(){
        return Math.round((this.subtotal * TAX_RATE) * 100) / 100;
    };
    this.getGrandTotal = function(){
        return this.subtotal + this.tax;
    };
    this.updateTotals = function(){
        this.subtotal = this.getSubtotal();
        this.tax = this.getTax();
        this.grandTotal = this.getGrandTotal();
    };
    this.addToOrder = function(orderItem){
        return new Promise((resolve, reject) => {
            var addon = menu.getMenuItem("addons", orderItem.addon);
            orderItem = menu.getMenuItem(orderItem.type, orderItem.itemId);
            if (addon){
                orderItem.addon = addon;
            }
            this.orderItems.push(new OrderItem(orderItem));
            this.updateTotals();
            resolve(orderItem);
        });
    }
    this.confirm = function(){
        this.confirmed = true;
    }
    this.updateTotals();
}

var fakeOrder1 = new Order({
    id: 1,
    customer: {
        id: 1,
        name: "Kyle Coberly"
    },
    orderTimestamp: now,
    confirmed: true,
    orderItems: [
        new OrderItem({
            id: 1,
            name: "Americano",
            price: 5,
            addon: {
                id: 1,
                name: "1% Milk"
            }
        }),
        new OrderItem({
            id: 2,
            name: "Espresso",
            price: 6
        })
    ]
});
var fakeOrder2 = new Order({
    id: 2,
    customer: {
        id: 2,
        name: "Elyse Coberly"
    },
    orderTimestamp: now,
    confirmed: true,
    orderItems: [
        new OrderItem({
            id: 3,
            name: "Mocha",
            price: 4,
            addon: {
                id: 3,
                name: "Cream"
            }
        })
    ]
});

var orders = [fakeOrder1, fakeOrder2];

function lookupCustomerOrder(customer){
    var order = orders.filter(order => order.customer.id == customer.id)[0];
    if (!order){
        order = new Order({
            id: 4,
            orderTimestamp: Date.now(),
            customer: customer,
            orderItems: []
        });
        orders.push(order);
    }
    return order;
}
function getOrder(user){
    return new Promise(function(resolve, reject){
        resolve(lookupCustomerOrder(user));
    });
}
function getOrders(){
    return new Promise(function(resolve, reject){
        resolve(orders.filter(order => order.confirmed));
    });
}

module.exports = {
    getOrder: getOrder,
    getOrders: getOrders,
    to2: to2
};

function timestampToDate(timestamp){
    var date = new Date(timestamp);
    return [date.getMonth() + 1, date.getDate()].join("/");
}
function timestampToTime(timestamp){
    var date = new Date(timestamp);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var period = "am";
    if (hours > 12){
        hours -= 12;
        period = "pm";
    }
    return [hours, minutes].join(":") + period;
}
function to2(number){
    return number.toFixed(2);
}
