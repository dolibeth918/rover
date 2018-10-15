const router = require('express').Router()
const {Vet} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const vets = await Vet.findAll()
    res.json(vets)
  } catch (err) {
    next(err)
  }
})
