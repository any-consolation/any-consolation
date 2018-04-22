const router = require('express').Router()
const { Article } = require('../db/models')

router.get('/', async (req, res, next) => {
  const articles = await Article.findAll({
    attributes: ['id', 'title', 'tagLine'],
    include: ['user']
  })
  res.json({ articles })
})

module.exports = router
