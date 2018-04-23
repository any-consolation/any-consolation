const router = require('express').Router()
const { Article } = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const articles = await Article.findAll({
      attributes: ['id', 'title', 'tagLine', 'url'],
      include: ['user']
    })
    res.json({ articles })
  }
  catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id, {
      attributes: ['id', 'title', 'tagLine', 'url', 'content'],
      include: ['user']
    })
    res.json(article)
  }
  catch (err) {
    next(err)
  }
})

module.exports = router
