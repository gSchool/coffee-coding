exports.seed = function(knex, Promise) {
    return knex("item").del()
    .then(function(){
        return Promise.all([
            knex("item").insert({
                name: "Americano",
                price: 4,
                type: "coffee"
            }),
            knex("item").insert({
                name: "Espresso",
                price: 3,
                type: "coffee"
            }),
            knex("item").insert({
                name: "Latte",
                price: 6,
                type: "coffee"
            }),
            knex("item").insert({
                name: "Cappucino",
                price: 5,
                type: "coffee"
            }),
            knex("item").insert({
                name: "Macchiato",
                price: 7,
                type: "coffee"
            }),
            knex("item").insert({
                name: "Mocha",
                price: 4,
                type: "coffee"
            }),
            knex("item").insert({
                name: "Cold Brew",
                price: 5,
                type: "coffee"
            }),
            knex("item").insert({
                name: "Danish",
                price: 5,
                type: "pastry"
            }),
            knex("item").insert({
                name: "Strudel",
                price: 5,
                type: "pastry"
            }),
            knex("item").insert({
                name: "Baklava",
                price: 5,
                type: "pastry"
            }),
            knex("item").insert({
                name: "Doughnut",
                price: 2,
                type: "pastry"
            }),
            knex("item").insert({
                name: "Skim Milk",
                type: "addon"
            }),
            knex("item").insert({
                name: "1% Milk",
                type: "addon"
            }),
            knex("item").insert({
                name: "Whole Milk",
                type: "addon"
            }),
            knex("item").insert({
                name: "Almond Milk",
                type: "addon"
            }),
            knex("item").insert({
                name: "Coconut Milk",
                type: "addon"
            }),
            knex("item").insert({
                name: "Soy Milk",
                type: "addon"
            }),
            knex("item").insert({
                name: "Cream",
                type: "addon"
            })
        ]);
    });
};
