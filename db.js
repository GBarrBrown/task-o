const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getAllTasks,
    getAllUsers,
    getTask,
    getUser
}


function getAllTasks(UID, db = connection){
    return db('users').select('tasks.id', 'tasks.name', 'tasks.description', 'tasks.creation_date', 'tasks.status')
        .join('task_user', 'users.id', 'task_user.user_id')
        .join('tasks', 'task_user.task_id', 'tasks.id')
        .where('users.id', UID)
}

function getTask(taskID, db = connection){
    return db('tasks')
        .select()
        // .join('task_user', 'tasks.id', 'task_user.task_id')
        // .join('users', 'users.id', "task_user.user_id")
        .where('tasks.id', taskID)
}

function getAllUsers(db = connection){
    return db('users').select()
}

function getUser(login, db = connection){
    return db('users')
        .select()
        .where('email', login)
}
