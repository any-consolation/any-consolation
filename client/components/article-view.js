import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticleThunk } from '../store'
// import history

class ArticleView extends Component {
  constructor() {
    super()
    // console.log(this.props.history.location.pathname)
  }

  componentDidMount() {
    this.props.getArticle(this.props.history.location.pathname)
  }

  render() {
    return (
      <div>
        <h1>hello there</h1>
        <h4>{this.props.article && this.props.article.title} by {this.props.article && (this.props.article.isAnonymous ? 'anonymous' : this.props.article.author)}</h4>
        <p>{this.props.article && this.props.article.content}</p>
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
