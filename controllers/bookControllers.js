const db = require('../models')

module.exports = {
    findall: function (req, res) {
        db.Book
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
    }
}