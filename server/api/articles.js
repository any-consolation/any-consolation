const router = require('express').Router()
const { Article } = require('../db/models')

router.get('/', (req, res, next) => {
  Article.findAll({
    attributes: ['id', 'title', 'tagLine'],
    include: ['author']
  })
})

module.exports = router
