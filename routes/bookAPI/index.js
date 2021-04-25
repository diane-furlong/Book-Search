const router = require('express').Router()
const bookRoutes = require('./bookRoute')

router.use('/books', bookRoutes)

module.exports = router