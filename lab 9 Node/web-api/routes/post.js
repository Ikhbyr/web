let express = require('express')
let router  = express.Router()

const Task  = require('../model/post')

// Post method
router.post('/post', function (require, res) {
    return Task.create({
        id          : require.body.id,
        genre       : require.body.genre,
        movie_name  : require.body.movie_name,
        director    : require.body.director,
        age_rating  : require.body.age_rating,
        trailer_link: require.body.trailer_link,
        date        : require.body.date,
        casts       : require.body.casts,
        runtime     : require.body.runtime,
        rating      : require.body.rating,
        photo_link  : require.body.photo_link
    }).then(function (Task) {
        if (Task) {
            res.send(Task);
        } else {
            res.status(400).send('Error in insert new record');
        }
    })
})

module.exports = router