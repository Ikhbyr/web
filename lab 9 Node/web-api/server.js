var express = require('express')
var bodyParser = require('body-parser')

var tasks = require('./routes/tasks.js')
let post = require('./routes/post.js')
var cors = require('cors')

var port = 3000

var app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', tasks)
app.use('/post', post)

app.listen(port, function() {
  console.log('Server started on port ' + port)
})