
exports.up = function(knex, Promise) {
4    table.renameColumn('email', 'username');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table.renameColumn('username', 'email');
  })
};
