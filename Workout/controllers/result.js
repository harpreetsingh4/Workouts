const Workout = require('../models/workout.js');


exports.getWorkout = (req, res) => {
    // eslint-disable-next-line array-callback-return
    Workout.find({}, function(err, docs) {
        if (!err) {
            //console.log(docs);
            //process.exit();
            res.body = {};
            res.body.my_data = JSON.stringify(docs);
            //res.render('../views/result.pug', res.body);
            res.render('../views/result.pug', { layout: 'layout', json: docs });

        } else { throw err; }
    });
    //

    //res.render('../views/result.pug', docs);
};



exports.putWorkout = (req, res) => {
    Workout.find((err, docs) => {
        res.render('Workout', { Workout: docs });
    });
};