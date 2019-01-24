
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, name:'Add pics', description:'Add a picture of a cat', creation_date:'2019-01-24', status: 0},
        {id: 2, name:'Do the thing', description:'Anything you like', creation_date:'2019-01-24', status: 0},
        {id: 3, name:'Have a nap', description:'Sleep more', creation_date:'2019-01-24', status: 0}
      ]);
    });
};
