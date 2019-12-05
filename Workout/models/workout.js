const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    name: String,
    rep: String,
    intensity: String,
    notes: String,
    set: String
});

const Workout = mongoose.model('workout', workoutSchema);
module.exports = Workout;