import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getPublishedArticleListThunk} from '../store'
import ArticleCard from './article-card'

class Home extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getPublishedArticleList()
  }

  render() {
    return (
      <div>
        {this.props.articleList && this.props.articleList.length && this.props.articleList.map(x => (
          <div>
            <ArticleCard title={x.title} tagLine={x.tagLine} url={x.url} author={x.user.name} />
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => ({
  articleList: state.articleList
})

const mapDispatch = dispatch => ({
  getPublishedArticleList() {
    dispatch(getPublishedArticleListThunk())
  }
})

export default connect(mapState, mapDispatch)(Home)
