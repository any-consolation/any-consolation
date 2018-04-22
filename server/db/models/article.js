const Sequelize = require('sequelize')
const db = require('../db')

const Article = db.define('article', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tagLine: {
    type: Sequelize.TEXT
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  isAnonymous: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  isPublished: {
    // depends on how much control bongo and I want over the website
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Article
