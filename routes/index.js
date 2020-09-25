const router = require('express').Router()

// connect your routes files here...
router.use('/api', require('./bookRoutes.js'))
router.use('/api', require('./gBookRoutes.js'))

module.exports = router
