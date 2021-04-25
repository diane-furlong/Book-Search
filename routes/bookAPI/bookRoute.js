const router = require('express').Router()
const bookControllers = require('../../controllers/bookControllers')

// route: /api/books
router.route('/').get(bookControllers.findAll)

module.exports = router