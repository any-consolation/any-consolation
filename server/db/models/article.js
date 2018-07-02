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
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  editText: {
    type: Sequelize.TEXT,
    defaultValue: null
  },
  pendingEdit: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

Article.beforeValidate((instance) => {
  instance.url = instance.title.replace(/\s/g, '-').toLowerCase()
})

module.exports = Article
