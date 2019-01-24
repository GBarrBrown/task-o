
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'name1', email:'name1@test.com'},
        {id: 2, name: 'name2', email:'name2@test.com'},
        {id: 3, name: 'name3', email:'name3@test.com'}
      ]);
    });
};
