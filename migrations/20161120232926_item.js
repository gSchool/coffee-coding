exports.up = function(knex, Promise) {
    return knex.schema.createTable("item", function(item){
        item.increments();
        item.string("name");
        item.integer("price");
        item.string("type");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("item");
};
