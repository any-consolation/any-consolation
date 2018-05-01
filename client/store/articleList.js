import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ARTICLELIST = 'GET_ARTICLELIST'
const REMOVE_ARTICLELIST = 'REMOVE_ARTICLELIST'

/**
 * INITIAL STATE
 */
const defaultArticleList = []

/**
 * ACTION CREATORS
 */
const getArticleList = articleList => ({ type: GET_ARTICLELIST, articleList })
const removeArticleList = () => ({ type: REMOVE_ARTICLELIST })

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


/**
 * REDUCER
 */

export default function (state = defaultArticleList, action) {
  switch (action.type) {
    case GET_ARTICLELIST:
      return action.articleList
    case REMOVE_ARTICLELIST:
      return defaultArticleList
    default:
      return state
  }
}
