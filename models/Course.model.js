const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    name: {
        type: Number,   
        required: true
    }

})

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;