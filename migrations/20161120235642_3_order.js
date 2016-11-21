exports.up = function(knex, Promise) {
    return knex.schema.createTable("order", function(order){
        order.increments();
        order.timestamp("timestamp").defaultTo(knex.fn.now());
        order.integer("user_id").references("id").inTable("user");
        order.boolean("confirmed");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("order");
};
