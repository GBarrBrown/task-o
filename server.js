const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes')

const server = express()

// Middleware

server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))

// Routes

server.use('/', userRoutes)

module.exports = server
