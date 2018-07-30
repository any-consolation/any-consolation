import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ArticleForm from './article-form'
import { getUserArticlesThunk } from '../store'

/**
 * COMPONENT
 */

class UserHome extends Component {

  constructor() {
    super()
  }

  componentDidMount() {

    this.props.getUserArticles(this.props.user.id)

  }

  render() {
    return (
      <div>
        <h2>any-consolation User Portal</h2>
        <h3>Your email: {this.props.email}</h3>
        <div>
          <h3>Your Articles:</h3>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date Created</th>
                <th>Published Anonymously?</th>
                <th>Edit</th>
              </tr>
            </thead>
            {this.props.user && this.props.articleList && this.props.articleList.map(article => (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>{article.createdAt}</td>
                <td>{article.isAnonymous ? 'True' : 'False'}</td>
                <td><button>Edit</button></td>
              </tr>))}
          </table>
        </div>

        <div>
          <br />
          <button>maybe a button to go to the new article input form</button>
        </div>
        <div>
          <h3>we need to be able to enter a new article here</h3>
          <ArticleForm />
        </div>
      </div>
    )
  }

}

// export const UserHome = (props) => {
//   const { email } = props

//   return (
//     <div>
//       <h2>any-consolation User Portal</h2>
//       <h3>Your email: {props.email}</h3>
//       <div>
//         <h3>we need a table of our own articles here</h3>
//       </div>
//       <div>
//         <button>maybe a button to go to the new article input form</button>
//       </div>
//       <div>
//         <h3>we need to be able to enter a new article here</h3>
//         <ArticleForm />
//       </div>
//     </div>
//   )
// }

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user,
    email: state.user.email,
    articleList: state.articleList
  }
}

const mapDispatch = dispatch => {

  return {
    getUserArticles(userId) {
      dispatch(getUserArticlesThunk(userId))
    }
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
