const mongoose = require('mongoose');

const disciplineSchema = mongoose.Schema({
    direction: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Direction'
    },
    course: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Course'
    },
    name: {
        type: String,
        required: true
    },
    semestr: {
        type: Number,
        required: true
    },
    formControl: {
        type: String,
        required: true
    },
    ze: {
        type: Number,
        required: true
    },
    watch: {
        type: Number,
        required: true
    }
})

const Discipline = mongoose.model('Discipline', disciplineSchema);

module.exports = Discipline;