const mongoose = require('mongoose');

const directionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Direction = mongoose.model('Direction', directionSchema);

module.exports = Direction;