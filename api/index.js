const express = require('express')
const path = require('path')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const morgan = require('morgan');

console.log('api/index.js is running!')
const app = express()

const files = require('./routes/files')

// Connect to database
connectDB()

console.log('process.env.MONGO_URI: ', process.env.MONGO_URI)

// Set up static folder
// app.use(express.static('abc'));
// app.use(express.static(path.join(__dirname, 'abc')))
// app.use('/uploads', express.static('/mnt/shared/uploads'))
// app.use('/static', express.static(__dirname + '/public'))

app.use('/v1/files', files)

module.exports = {
    path: '/api',
    handler: app
}