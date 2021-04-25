const path = require('path')
const router = require('express').Router()
const apiRoutes = require('./bookAPI')

router.use('./api', apiRoutes)

module.exports = router