
exports.up = function(knex, Promise) {
  return knex.schema.table('times', function(table) {
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
  })
};

exports.down = function(knex, Promise) {

};
