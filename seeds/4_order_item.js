exports.seed = function(knex, Promise) {
    return knex("order_item").del()
    .then(function(){
        var item = knex.select("id").from("item").where("type", "coffee").first();
        var order = knex.select("id").from("order").first();
        return Promise.all([
            knex("order_item").insert({
                order_id: order.id,
                item_id: item.id
            })
        ]);
    });
};
