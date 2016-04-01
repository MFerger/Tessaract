
exports.up = function(knex, Promise) {
  return knex.schema.createTable('times', function(table) {
    table.increments();
    table.integer('user_id');
    table.time('solve_time');
    table.timestamp('timestamp');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('times');
};
