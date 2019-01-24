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
        res.render('home',tasks)
    })
    .catch(err => {
        console.log(err.message)
        res.status(500).send('error')
      })
})

module.exports = router
