import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAdminArticleListThunk, adminPublishArticleThunk } from '../store'

class AdminArticleList extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getAdminArticleList()
  }

  render() {

    return (
      <div>
        <h2>Article List</h2>
        <table>
          <thead>
            <tr>
              <th>Article</th>
              <th>Author</th>
              <th>Date Created</th>
              <th>Published?</th>
            </tr>
          </thead>
          <tbody>
            {this.props.user && this.props.user.isAdmin && this.props.articleList && this.props.articleList.map(x => (
              <tr key={x.id}>
                <td>{x.title}</td>
                <td>{x.user.name}</td>
                <td>{x.createdAt}</td>
                <td><button onClick={() => {
                  const publish = !x.isPublished
                  this.props.publishArticle(x, publish)
                  // x.isPublished = !x.isPublished
                }
                }>{x.isPublished ? "Unpublish" : "Publish"}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )

  }

}

const mapState = state => ({
  user: state.user,
  articleList: state.articleList
})

const mapDispatch = dispatch => ({
  getAdminArticleList() {
    dispatch(getAdminArticleListThunk())
  },
  publishArticle(article, published) {
    dispatch(adminPublishArticleThunk(article, published))
  }
})

export default connect(mapState, mapDispatch)(AdminArticleList)
