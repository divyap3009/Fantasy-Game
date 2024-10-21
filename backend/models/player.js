const mongoose = require('mongoose');
const playerSchema = new mongoose.Schema({
    name: String,
    points: Number,
    position: String
});

module.exports = mongoose.model('Player', playerSchema);
