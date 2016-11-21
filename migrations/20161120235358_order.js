exports.up = function(knex, Promise) {
    return knex.schema.createTable("user", function(user){
        user.increments();
        user.string("name");
        user.string("username");
        user.string("password");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("user");
};
