import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAdminUserListThunk, adminVerifyUserThunk } from '../store'

class AdminUserList extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getAdminUserList()
  }

  render() {

    return (
      <div>
        <h2>User List</h2>
        <table>
          <thead>
            <tr>
              <th>email</th>
              <th>user name</th>
              <th>Date Created</th>
              <th>verified?</th>
            </tr>
          </thead>
          <tbody>
            {this.props.user && this.props.user.isAdmin && this.props.adminUserList && this.props.adminUserList.map(x => (
              <tr key={x.id}>
                <td>{x.email}</td>
                <td>{x.name}</td>
                <td>{x.createdAt}</td>
                <td>{!x.isAdmin && <button onClick={() => {
                  const verify = !x.isVerified
                  this.props.verifyUser(x, verify)
                  // x.isPublished = !x.isPublished
                }
                }>{x.isVerified ? 'Unverify' : 'Verify'}</button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      // <div>
      //   <h2>User List</h2>
      //   {this.props.user && this.props.user.isAdmin && this.props.adminUserList && this.props.adminUserList.map(x => (
      //     <div key={x.id}>
      //       <h2>email: {x.email}, id: {x.id}, name: ${x.name}, is verified? {x.isVerified ? "True" : "False"}</h2>
      //     </div>
      //   ))}
      // </div>
    )

  }

}

const mapState = state => ({
  user: state.user,
  adminUserList: state.adminUserList
})

const mapDispatch = dispatch => ({
  getAdminUserList() {
    dispatch(getAdminUserListThunk())
  },
  verifyUser(user, verify) {
    dispatch(adminVerifyUserThunk(user, verify))
  }
})

export default connect(mapState, mapDispatch)(AdminUserList)
