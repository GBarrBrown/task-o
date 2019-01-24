
exports.up = function(knex, Promise) {
    return knex.schema.createTable('task_user', (table) => {
        table.integer('user_id')
        table.integer('task_id')
      })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('task_user')
};
