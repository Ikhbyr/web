let express = require('express')
let router  = express.Router()

const Task  = require('../model/post')

// Post method
router.delete('/delete/:id', function (require, res) {
   Task.destroy({
       where: {
           id: require.params.id
       }
   })
   .then(() => {
       res.send('Устлаа')
   })
   .catch(err => {
       res.send('Aлдаа: ' + err)
   })
})

module.exports = router