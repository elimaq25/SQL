const { options } = require("./options/optionsMDB");
const knex = require("knex")(options);

// knex.schema
//   .createTable("products", (table) => {
//     table.increments("id_product"), 
//     table.string("name"), 
//     table.integer("price");
//     table.integer("stock");
//   })
//   .then(() => {
//     console.log("todo bien");
//   })
//   .catch((err) => {
//     console.log(err);
//     throw new Error(err);
//   })
//   .finally(() => {
//     knex.destroy();
//   });


const products = [
    { name: "cartera"  , price: 100  , stock: 12},
    { name: "pelota"  , price: 11  , stock: 2},
    { name: "zapato"  , price: 500  , stock: 25},
]; 

knex("products")
  .insert(products)
  .then((res) => console.log("todo ok", res))
  .catch((e) => console.log(e))
  .finally(() => knex.destroy()); 