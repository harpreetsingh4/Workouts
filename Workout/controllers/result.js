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


/*
exports.postWorkout = (req, res) => {
    //console.log(req);
    const routeParams = req.body;
    console.log("----printing routeParams");
    console.log(routeParams);
    console.log("-------finished printing routeParams...");
    var newWorkout = new Workout({
        name: routeParams.Workout,
        rep: routeParams.Rep,
        intensity: routeParams.Intensity,
        notes: routeParams.message,
        set: routeParams.set
    });
    newWorkout.save(function(err, workout) {
            if (err) return console.error(err);
            console.log(workout.name + " saved to db Workout");
        })
};
*/


exports.putWorkout = (req, res) => {
    Workout.find((err, docs) => {
        res.render('Workout', { Workout: docs });
    });
};