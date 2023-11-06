const Course = require("../models/Course.model")

module.exports.coursesController = {
    addCourse: async (req, res) => {
        const data = await Course.create({
            name: req.body.name
        })
        res.json(data)
    },
    getCourse: async (req, res) => {
        const data = await Course.find({})
        res.json(data)
    }
}