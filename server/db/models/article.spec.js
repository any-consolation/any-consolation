const { expect } = require('chai')
const db = require('../index')
const Article = db.model('article')

describe('Article model', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('hooks', () => {

    describe('beforeValidate', () => {

      let article

      /*

      article: {
        title: 'string',
        tagLine: 'text',
        content: 'text',
        isAnonymous: false,
        isPublished: false,
        url: 'string'
      }

      */

      beforeEach(() => {

        return Article.create({
          title: 'This Is A Fake Article',
          tagLine: 'I told you it\'s fake',
          content: 'blah blah blah.'
        })
          .then(created => {
            article = created
          })

      })

      it('sets url equal to lower case title separated by hyphens upon creation', () => {

        expect(article.url).to.equal('this-is-a-fake-article')
      })

      it('does the same for updates', () => {

        return article.update({
          title: 'Here Is One'
        })
          .then(() => {
            expect(article.url).to.be.equal('here-is-one')
          })

      })

      it('won\'t even accept straight up changes to url', () => {

        return article.update({
          url: 'something else'
        })
          .then(() => {
            expect(article.url).to.be.equal('this-is-a-fake-article')
          })
      })

    })

  })

})
