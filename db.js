const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getAllTasks,
    getAllUsers,
    getTask,
    getUser,
    getCollabs,
    addTask
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

<<<<<<< HEAD
function addTask(UID, task, db = connection){
    const date = new Date().toString().slice(0,15)
    var cleanData = {
        name: task.name,
        description: task.description,
        creation_date: date,
        status: task.status
    }
    return db('tasks')
        .insert(cleanData)
        .then((taskID) => {
            console.log(taskID)
            return db('task_user')
                .insert({'user_id': UID, 'task_id': taskID[0]})
        })
}
=======
>>>>>>> 874ac937fdddd981831a20b0344654228b1cbccf
