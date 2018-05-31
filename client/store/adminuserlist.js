import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USERLIST = 'GET_USERLIST'
const REMOVE_USERLIST = 'REMOVE_USERLIST'
const VERIFY_USER = 'VERIFY_USER'

/**
 * INITIAL STATE
 */
const defaultAdminUserList = []

/**
 * ACTION CREATORS
 */
const getUserList = adminUserList => ({ type: GET_USERLIST, adminUserList })
const removeUserList = () => ({ type: REMOVE_USERLIST })
const verifyUser = user => ({ type: VERIFY_USER })

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

export const adminVerifyUserThunk = (user, verify) => dispatch => {
  axios.get(`/api/users/verify?userId=${user.id}&verify=${verify}`, { user, verify })
    .then(res => res.data)
    .then(user => {
      axios.get(`/api/users`)
        .then(res => res.data)
        .then(userList => {
          userList = userList.sort((a, b) => a.id - b.id)
          dispatch(getUserList(userList))
        })
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
