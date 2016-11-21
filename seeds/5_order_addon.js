exports.seed = function(knex, Promise) {
    return knex("order_addon").del()
    .then(function(){
        var item = knex.select("id").from("item").where("type", "addon").first();
        var orderItem = knex.select("id").from("order_item").first();
        return Promise.all([
            knex("order_addon").insert({
                order_item_id: orderItem.id,
                item_id: item.id
            })
        ]);
    });
};
