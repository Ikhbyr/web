let express = require('express')
let router  = express.Router()

const Task  = require('../model/post')

// Post method
router.put('/update/:id', function (require, res) {
    if(!require.body.movie_name){
        res.status(400)
        res.json({
        error: 'Bad Data'
        })
    } else {
        Task.update({
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
        },
        { where : 
            {
                id: require.params.id
            }
        })
        .then(() => {
            res.send('Updated!')
          })
          .error(err => handleError(err))
    }
})

module.exports = router