const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
}


function getTasks(UID, db = connection){
    return connection('users').select()
        .join('task_user', 'users.id', 'task_user.user_id')
        .join('tasks', 'task_user.task_id', 'tasks.id')
        .where('users.id', UID)
}

function getUsers(db = connection){
    return connection('users').select()
}
