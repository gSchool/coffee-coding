exports.up = function(knex, Promise) {
    return knex.schema.createTable("order_item", function(orderItem){
        orderItem.increments();
        orderItem.integer("order_id").references("id").inTable("order");
        orderItem.integer("item_id").references("id").inTable("item");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("order_item");
};
