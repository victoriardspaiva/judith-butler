const express = require('express') // pego o express
const consign = require('consign')
const app = express() // instaciou o express
const bodyparser = require('body-parser')
const ejs = require('ejs')

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('./public'))
app.use(bodyparser.urlencoded({extended: true}))

consign()
    .include('app/routes')
    .into(app)

module.exports = app