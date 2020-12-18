const express = require('express')
const path = require('path')

console.log('api/index.js is running!')
const app = express()

// Set up static folder
// app.use(express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static('/mnt/shared/uploads'))
// app.use('/static', express.static(__dirname + '/public'))


module.exports = {
    path: '/api',
    handler: app
}