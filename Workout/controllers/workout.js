const Workout = require('../models/workout.js');

exports.getWorkout = (req, res) => {
    // eslint-disable-next-line array-callback-return
    Workout.find((err, docs) => {
        res.render('Workout', { Workout: docs });
    });
};

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
        set: routeParams.Set
    });
    newWorkout.save(function(err, workout) {
        if (err) return console.error(err);
        console.log(workout.name + " saved to db Workout");
    })
    res.redirect('back');

};

exports.putWorkout = (req, res) => {
    Workout.find((err, docs) => {
        res.render('Workout', { Workout: docs });
    });
};