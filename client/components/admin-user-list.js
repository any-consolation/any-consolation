import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAdminUserListThunk } from '../store'

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
        {this.props.user && this.props.user.isAdmin && this.props.adminUserList && this.props.adminUserList.map(x => (
          <div key={x.id}>
            <h2>email: {x.email}, id: {x.id}</h2>
          </div>
        ))}
      </div>
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
  }
})

export default connect(mapState, mapDispatch)(AdminUserList)
