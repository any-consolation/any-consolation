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
const defaultAdminArticleList = []

/**
 * ACTION CREATORS
 */
const getArticleList = adminArticleList => ({ type: GET_ARTICLELIST, adminArticleList })
const removeArticleList = () => ({ type: REMOVE_ARTICLELIST })

/**
 * THUNK CREATORS
 */

export const getAdminArticleListThunk = () => dispatch => {
  console.log()
  axios.get(`/api/articles/admin`)
    .then(res => res.data)
    .then(adminArticleList => {
      dispatch(getArticleList(adminArticleList))
    })
}


/**
 * REDUCER
 */

export default function (state = defaultAdminArticleList, action) {
  switch (action.type) {
    case GET_ARTICLELIST:
      return action.adminArticleList
    case REMOVE_ARTICLELIST:
      return defaultAdminArticleList
    default:
      return state
  }
}
