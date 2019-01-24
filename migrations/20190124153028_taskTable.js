
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tasks', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('description')
        table.string('creation_date')
        table.number('status')
      })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks')
};
