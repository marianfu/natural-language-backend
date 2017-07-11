import Bookshelf from 'bookshelf';
import Knex from 'knex';

// Initialize knex connection.
const knex = Knex({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'natural_user',
    password : 'natural',
    database : 'natural_db',
    charset  : 'utf8'
  }
});

export default Bookshelf(knex);

// import objection, { Model } from 'objection';
// import Knex from 'knex';

// // Initialize knex connection.
// const knex = Knex({
//   client: 'mysql',
//   connection: {
//     host     : '127.0.0.1',
//     user     : 'natural_user',
//     password : 'natural',
//     database : 'natural_db',
//     charset  : 'utf8'
//   }
// });

// // Give the connection to objection.
// Model.knex(knex);

// // Create database schema. You should use knex migration files to do this. We
// // create it here for simplicity.
// const connection = knex.schema.createTableIfNotExists('Person', table => {
//   table.increments('id').primary();
//   table.string('firstName');
// });

// export default connection;