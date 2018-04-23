import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ARTICLE = 'GET_ARTICLE'
const REMOVE_ARTICLE = 'REMOVE_ARTICLE'

/**
 * INITIAL STATE
 */
const defaultArticle = {}

/**
 * ACTION CREATORS
 */
const getArticle = article => ({ type: GET_ARTICLE, article })
const removeArticle = () => ({ type: REMOVE_ARTICLE })

/**
 * THUNK CREATORS
 */

export const getArticleThunk = url => dispatch => {
  console.log(url)
  axios.get(`/api${url}`)
    .then(res => res.data)
    .then(art => {
      dispatch(getArticle(art))
    })
}


/**
 * REDUCER
 */

export default function (state = defaultArticle, action) {
  switch (action.type) {
    case GET_ARTICLE:
      return action.article
    case REMOVE_ARTICLE:
      return defaultArticle
    default:
      return state
  }
}
