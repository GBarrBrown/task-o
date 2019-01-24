const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
res.redirect('/login')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/:id/home', (req, res)=> {
    res.render('home')
})
module.exports = router
