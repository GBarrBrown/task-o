const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getAllTasks,
    getAllUsers,
    getTask,
    getUser,
    getCollabs
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
        .where('tasks.id', taskID)
}

function getCollabs(taskID, db = connection){
    return db('task_user')
        .select('users.id', 'users.name', 'users.email')
        .join('users', 'users.id', 'task_user.user_id')
        .where('task_user.task_id', taskID)
}

function getAllUsers(db = connection){
    return db('users').select()
}

function getUser(login, db = connection){
    return db('users')
        .select()
        .where('email', login)
}

