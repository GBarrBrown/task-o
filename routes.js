const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
res.redirect('/login')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', (req,res) => {
    return db.getUser (req.body.email)
    .then((user) => {
        var id = user[0].id
        res.redirect('/' + id + '/home')
    })
    .catch(err => {
        console.log(err.message)
        res.status(500).send('error')
      })
})

router.get('/:id/home', (req, res)=> {

    return db.getAllTasks(req.params.id)
    .then((tasks) =>{
        var column0 = []
        var column1 = []
        var column2 = []
        for(let task of tasks){
            switch(task.status){
                case 0:
                    column0.push(task)
                    break;

                case 1:
                    column1.push(task)
                    break;

                case 2:
                    column2.push(task)
                    break;
            }
        }
        var arrangedTasks = {
            column0,
            column1,
            column2
        }
        res.render('home',arrangedTasks)
    })
    .catch(err => {
        console.log(err.message)
        res.status(500).send('error')
      })
})

router.get('/:id/task/:task', (req,res) => {
    return db.getTask(req.params.task).then((task) => {
        return db.getCollabs(req.params.task).then((collabs) => {
            task[0].collaborators = collabs
            res.render('task', task[0])
        })
    })
})

router.get('/:id/add', (req, res) => {
    var id = req.params.id
    res.render('add-task',{id})
})

router.post('/:id/add', (req, res) => {
    var UID = req.params.id
    var task = req.body

    return db.addTask(UID,task)
    .then((itemID) => {
        res.redirect('/'+UID+'/home')
    })
})



module.exports = router
