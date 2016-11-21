exports.seed = function(knex, Promise) {
    return knex("user").del()
    .then(function(){
        return Promise.all([
            knex("user").insert({
                name: "Kyle Coberly",
                username: "kylecoberly",
                password: "abcdefg"
            })
        ]);
    });
};
