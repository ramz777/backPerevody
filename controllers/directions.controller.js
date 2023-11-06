const Direction = require("../models/Direction.model");

module.exports.directionsController = {
    addDirection: async (req, res) => {
        const data = await Direction.create({
            name: req.body.name
        })
        res.json(data)
    },
    getDirection: async (req, res) => {
        const data = await Direction.find({})
        res.json(data)
    }
}