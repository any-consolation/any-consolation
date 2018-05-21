import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USERLIST = 'GET_USERLIST'
const REMOVE_USERLIST = 'REMOVE_USERLIST'

/**
 * INITIAL STATE
 */
const defaultAdminUserList = []

/**
 * ACTION CREATORS
 */
const getUserList = adminUserList => ({ type: GET_USERLIST, adminUserList })
const removeUserList = () => ({ type: REMOVE_USERLIST })

/**
 * THUNK CREATORS
 */

export const getAdminUserListThunk = () => dispatch => {
  console.log()
  axios.get(`/api/users`)
    .then(res => res.data)
    .then(adminUserList => {
      adminUserList = adminUserList.sort((a, b) => a.id - b.id)
      dispatch(getUserList(adminUserList))
    })
}


/**
 * REDUCER
 */

export default function (state = defaultAdminUserList, action) {
  switch (action.type) {
    case GET_USERLIST:
      return action.adminUserList
    case REMOVE_USERLIST:
      return defaultAdminUserList
    default:
      return state
  }
}
