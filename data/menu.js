module.exports = {
    coffee: [{
        id: 1,
        name: "Americano",
        price: 4
    },{
        id: 2,
        name: "Espresso",
        price: 3
    },{
        id: 3,
        name: "Latte",
        price: 6
    },{
        id: 4,
        name: "Cappucino",
        price: 5
    },{
        id: 5,
        name: "Macchiato",
        price: 7
    },{
        id: 6,
        name: "Mocha",
        price: 4
    },{
        id: 7,
        name: "Cold Brew",
        price: 5
    }],
    pastries: [{
        id: 1,
        name: "Danish",
        price: 2
    },{
        id: 2,
        name: "Strudel",
        price: 3
    },{
        id: 3,
        name: "Baklava",
        price: 2
    }],
    addons: [{
        id: 1,
        name: "Skim Milk"
    },{
        id: 2,
        name: "1% Milk"
    },{
        id: 3,
        name: "Whole Milk"
    },{
        id: 4,
        name: "Almond Milk"
    },{
        id: 5,
        name: "Coconut Milk"
    },{
        id: 6,
        name: "Soy Milk"
    },{
        id: 7,
        name: "Cream"
    }],
    getMenuItem: function(type, id){
        return this.getItemById(this[type], id);
    },
    getItemById: function(collection, id){
        return collection.filter(function(item){
            return item.id == id;
        })[0];
    }
};
