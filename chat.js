const { options } = require("./options/optionsMDB");

const knex = require("knex")(
    {client: "sqlite3",
    connection: {
        filename: "./db/mydb.sqlite",},
        useNullAsDefault: true,
    });


    knex.schema
        .createTable("chat", (table) => {
        table.increments("mensaje"), 
        table.string("email"),
        table.string("texto")
        })
        .then(() => {
        console.log("todo bien");
        })
        .catch((err) => {
        console.log(err);
        throw new Error(err);
        })
        .finally(() => {
        knex.destroy();
        });