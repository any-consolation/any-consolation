import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ARTICLELIST = 'GET_ARTICLELIST'
const REMOVE_ARTICLELIST = 'REMOVE_ARTICLELIST'
const PUBLISH_ARTICLE = 'PUBLISH_ARTICLE'
const GET_USER_ARTICLES = 'GET_USER_ARTICLES'

/**
 * INITIAL STATE
 */
const defaultArticleList = []

/**
 * ACTION CREATORS
 */
const getArticleList = articleList => ({ type: GET_ARTICLELIST, articleList })
const removeArticleList = () => ({ type: REMOVE_ARTICLELIST })
const publishArticle = article => ({ type: PUBLISH_ARTICLE, article })

/**
 * THUNK CREATORS
 */

export const getPublishedArticleListThunk = () => dispatch => {
  axios.get(`/api/articles`)
    .then(res => res.data)
    .then(articleList => {
      console.log(articleList)
      dispatch(getArticleList(articleList))
    })
}

export const getAdminArticleListThunk = () => dispatch => {
  axios.get(`/api/articles/admin`)
    .then(res => res.data)
    .then(articleList => {
      dispatch(getArticleList(articleList))
    })
}

export const adminPublishArticleThunk = (article, publish) => dispatch => {
  axios.get(`/api/articles/publish?articleId=${article.id}&publish=${publish}`, { article, publish })
    .then(res => res.data)
    .then(article => {
      axios.get(`/api/articles/admin`)
        .then(res => res.data)
        .then(articleList => {
          articleList = articleList.sort((a, b) => a.id - b.id)
          dispatch(getArticleList(articleList))
        })
    })
}

export const getUserArticlesThunk = userId => dispatch => {
  axios.get(`/api/articles/user/${userId}`)
    .then(res => res.data)
    .then(articleList => {
      dispatch(getArticleList(articleList))
    })
}

/**
 * REDUCER
 */

export default function (state = defaultArticleList, action) {
  switch (action.type) {
    case GET_ARTICLELIST:
      return action.articleList
    case REMOVE_ARTICLELIST:
      return defaultArticleList
    case PUBLISH_ARTICLE:
      return state.map(x => (x.id === action.article.id ? action.article : x))
    default:
      return state
  }
}
