var express = require('express')
var router = express.Router()

const Task = require('../model/task')

// Get All Tasks
router.get('/tasks', (req, res, next) => {
    Task.findAll()
      .then(tasks => {
        res.send(tasks)
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })

  module.exports = router