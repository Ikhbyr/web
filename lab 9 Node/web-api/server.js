var express = require('express')
var bodyParser = require('body-parser')

var tasks = require('./routes/tasks.js')
let post = require('./routes/post.js')
let put = require('./routes/put.js')
let deletes = require('./routes/delete.js')
var cors = require('cors')

var port = 3000

var app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', tasks)
app.use('/api', post)
app.use('/api', deletes)
app.use('/api', put)

app.listen(port, function() {
  console.log('Server started on port ' + port)
})