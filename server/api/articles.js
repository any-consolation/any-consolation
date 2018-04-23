const router = require('express').Router()
const { Article } = require('../db/models')

router.get('/:title', async (req, res, next) => {
  try {
    const article = await Article.find({
      where: {
        url: req.params.title
      },
      attributes: ['id', 'title', 'tagLine', 'url', 'content'],
      include: ['user']
    })
    res.json(article)
  }
  catch (err) {
    next(err)
  }
})

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

module.exports = router
