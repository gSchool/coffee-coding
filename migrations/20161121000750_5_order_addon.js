exports.up = function(knex, Promise) {
    return knex.schema.createTable("order_addon", function(orderItem){
        orderItem.increments();
        orderItem.integer("order_item_id").references("id").inTable("order_item");
        orderItem.integer("item_id").references("id").inTable("item");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("order_addon");
};

