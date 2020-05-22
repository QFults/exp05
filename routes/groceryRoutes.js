const router = require('express').Router()

// Grocery routes...

// GET all groceries
router.get('/groceries', (req, res) => {
  res.send('GET all groceries')
})

// POST a grocery
router.post('/groceries', (req, res) => {
  res.send('POST a grocery')
})

module.exports = router
