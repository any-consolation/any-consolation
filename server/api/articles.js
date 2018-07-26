const router = require('express').Router()
const { Article } = require('../db/models')

// get a list of all articles, regardless of status, (for admin page):

router.get('/admin', async (req, res, next) => {
  try {
    const articleList = await Article.findAll({
      include: ['user']
    })
    console.log('total articles: ' + articleList.length)
    res.json(articleList)
  }
  catch (err) {
    next(err)
  }
})


// To publish an article (as Admin):

router.get('/publish', async (req, res, next) => {
  try {
    // console.log(req)
    let article = await Article.findById(req.query.articleId)
    article = await article.update({
      isPublished: req.query.publish
    }, {
      include: ['user']
    })
    res.json({ article })
  }
  catch (err) {
    next(err)
  }
})


// Get an individual article (to read):

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


// get all published articles (for home page):

router.get('/', async (req, res, next) => {
  try {
    const articles = await Article.findAll(
    {
      where: { isPublished: true },
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
