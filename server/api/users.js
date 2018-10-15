const router = require('express').Router()
const {User, Vet} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id/vets', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    const vetsWithUser = await user.getVets()
    res.json(vetsWithUser)
  } catch (err) {
    next(err)
  }
})

router.post('/:id/vets', async (req, res, next) => {
  try {
    const vet = await Vet.findById(req.body.id)
    const user = await User.findById(req.params.id)
    user.addVet(vet)
    res.json(user)
  } catch (err) {
    next(err)
  }
})
