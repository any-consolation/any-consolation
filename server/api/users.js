const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'name', 'email', 'isVerified', 'createdAt']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/verify', async (req, res, next) => {
  try {
    let user = await User.findById(req.query.userId)
    user = await user.update({
      isVerified: req.query.verify
    })
    res.json({ user })
  }
  catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id, {
      attributes: ['id', 'email', 'name', 'isVerified', 'isAdmin']
    })
    res.json(user)
  }
  catch (err) {
    next(err)
  }
})
