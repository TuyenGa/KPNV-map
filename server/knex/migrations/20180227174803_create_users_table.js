
exports.up = function(knex, Promise) {
  return knex.schema
    .withSchema('public')
    .createTable('users',function(table){
      table.increments('id').primary();
      table.specificType('email','char(80)').unique().notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
};
