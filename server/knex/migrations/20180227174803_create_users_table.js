
exports.up = function(knex, Promise) {
  return knex.schema
    .withSchema('public')
    .createTable('users',function(table){
      table.increments('id').primary();
      table.specificType('email','char(80)').unique().notNullable();
      table.specificType('password','char(60)').notNullable();
      table.string('name',[200]).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
};
