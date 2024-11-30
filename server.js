const express = require('express')
const path = require('path')    // import path

const indexRouter = require('./routes/index')

const app = express()

const staticFilePath = path.join(__dirname, 'client', 'dist') // allow to run client/ dist directories
const staticFiles = express.static(staticFilePath)  // treat as static files
app.use('/', staticFiles)

app.use('/', indexRouter)

const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})