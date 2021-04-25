const express = require('express')
const mongoose = require('mongoose')
const routes = require('routes')
const app = express()
const PORT = process.env.PORT || 3000

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//for heroku
if(process.env.NODE_ENV==="production") {
    app.use(express.static('client/build'))
}

app.use(routes)

//mongodb connect
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/booksearch')

//start server
app.listen(PORT, function() {
    console.log(`Running on https://localhost:3000`)
})