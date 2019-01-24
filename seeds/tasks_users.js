
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('task_user').del()
    .then(function () {
      // Inserts seed entries
      return knex('task_user').insert([
        {user_id:1, task_id:1},
        {user_id:1, task_id:2},
        {user_id:1, task_id:3},
        {user_id:2, task_id:1},
        {user_id:2, task_id:2},
        {user_id:2, task_id:3},
        {user_id:3, task_id:1},
        {user_id:3, task_id:2},
        {user_id:3, task_id:3}
      ]);
    });
};
