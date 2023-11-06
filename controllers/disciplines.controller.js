const Discipline = require("../models/Discipline.model")

module.exports.disciplinesController = {
    addDiscipline: async (req, res) => {
        const data = await Discipline.create({
            direction: req.body.direction,
            course: req.body.course,
            name: req.body.name,
            semestr: req.body.semestr,
            formControl: req.body.formControl,
            ze: req.body.ze,
            watch: req.body.watch
        })
        res.json(data)
    },


    getDiscipline: async (req, res) => {
        const data = await Discipline.find({})
        res.json(data)
    },

    getSemestr: async (req, res) => {
        const data = await Discipline.find({
           semestr: {$gte: req.params.id, $lte: req.params.id2}
        })
        res.json(data)
    },

    getPlans: async (req, res) => {
        const data = await Discipline.find({
            direction: req.params.dirId,
            course: req.params.courseId,
        })
        res.json(data)
    }
}