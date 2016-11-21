exports.seed = function(knex, Promise) {
    return knex("order").del()
    .then(function(){
        var user = knex.select("id").from("user").first();
        return Promise.all([
            knex("order").insert({
                user_id: user.id,
                confirmed: true
            })
        ]);
    });
};
