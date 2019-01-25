
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, name:'Add pics', description:'Add a picture of a cat', creation_date:'Thu Jan 25 2019', status: 0},
        {id: 2, name:'Do the thing', description:'Anything you like', creation_date:'Thu Jan 25 2019', status: 1},
        {id: 3, name:'Have a nap', description:'Sleep more', creation_date:'Thu Jan 25 2019', status: 2},
        {id: 4, name:'test 4', description:'This is a test input', creation_date:'Thu Jan 25 2019', status: 0},
        {id: 5, name:'test 5', description:'This is a test input', creation_date:'Thu Jan 25 2019', status: 1},
        {id: 6, name:'test 6', description:'This is a test input', creation_date:'Thu Jan 25 2019', status: 2},
        {id: 7, name:'test 7', description:'This is a test input', creation_date:'Thu Jan 25 2019', status: 0},
        {id: 8, name:'test 8', description:'This is a test input', creation_date:'Thu Jan 25 2019', status: 1},
        {id: 9, name:'test 9', description:'This is a test input', creation_date:'Thu Jan 25 2019', status: 2}
      ]);
    });
};
