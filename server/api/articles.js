const router = require('express').Router()
const { Article } = require('../db/models')

router.get('/admin', async (req, res, next) => {
  try {
    const articleList = await Article.findAll()
    console.log('total articles: ' + articleList.length)
    res.json(articleList)
  }
  catch (err) {
    next(err)
  }
})

router.get('/:title', async (req, res, next) => {
  try {
    const article = await Article.find({
      where: {
        url: req.params.title
      },
      // attributes: ['id', 'title', 'tagLine', 'url', 'content'],
      include: ['user']
    })
    const { id, title, tagLine, url, content, isAnonymous, isPublished, user } = article
    if (!isPublished) {
      res.sendStatus(404)
    } else if (isAnonymous) {
      res.json({ id, title, tagLine, url, content, isAnonymous })
    } else {
      const author = user.name
      res.json({ id, title, tagLine, url, content, isAnonymous, author })
    }
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
    res.json(articles)
  }
  catch (err) {
    next(err)
  }
})

module.exports = router
