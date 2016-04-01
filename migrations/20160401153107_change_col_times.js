
exports.up = function(knex, Promise) {
  return knex.schema.table('times', function(table) {
    table.dropColumn('user_id');
    table.string('username');
  })
};

exports.down = function(knex, Promise) {


};
