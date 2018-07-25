import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticleThunk } from '../store'
import ParsedArticle from './parsed-article'
// import history

class ArticleView extends Component {
  constructor() {
    super()

    this.state = { parsedArray: [] }

    this.bbCodeParser = this.bbCodeParser.bind(this)

    // console.log(this.props.history.location.pathname)
  }

  componentDidMount() {
    this.props.getArticle(this.props.history.location.pathname)
  }

  bbCodeParser() {

    const content = this.props.article.content

    const imgRegex = /\[img([^\]]*)\]([^\[]*)\[\/img\]/g

    let match = imgRegex.exec(content)

    let parsedContentArray = []

    while (match !== null) {

      let textObj = { type: 'text' }

      let imageObj = { captured: match[0] }
      imageObj.type = 'img'
      imageObj.float = match[1].trim() === 'float=right' ? 'right' : 'left'
      imageObj.url = match[2]
      imageObj.index = match.index

      if (parsedContentArray.length === 0) {
        textObj.begin = 0
      } else {
        textObj.begin = parsedContentArray[parsedContentArray.length - 1].index + parsedContentArray[parsedContentArray.length - 1].captured.length
      }
      textObj.end = imageObj.index
      textObj.captured = content.slice(textObj.begin, textObj.end)

      parsedContentArray.push(textObj)
      parsedContentArray.push(imageObj)

      match = imgRegex.exec(content)
    }

    let textObj = { type: 'text' }

    if (parsedContentArray.length) {
      textObj.begin = parsedContentArray[parsedContentArray.length - 1].index + parsedContentArray[parsedContentArray.length - 1].captured.length
      textObj.end = content.length
      textObj.captured = content.slice(textObj.begin, textObj.end)
    } else {
      textObj.captured = content
      textObj.begin = 0
      textObj.end = content ? content.length : 0
    }

    parsedContentArray.push(textObj)

    return parsedContentArray

  }

  render() {

    let parsedContentArray = this.bbCodeParser()

    return (
      <div className="articleView">
        <h1>{this.props.article && this.props.article.title}</h1>
        <h4>by {this.props.article && (this.props.article.isAnonymous ? 'anonymous' : this.props.article.author)}</h4>
        <ParsedArticle className="parsedArticle" parsedContentArray={parsedContentArray} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    article: state.article
  }
}

const mapDispatch = dispatch => {
  return {
    getArticle(url) {
      dispatch(getArticleThunk(url))
    }
  }
}

export default connect(mapState, mapDispatch)(ArticleView)
