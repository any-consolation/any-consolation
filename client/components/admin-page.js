import React, { Component } from 'react'
import { connect } from 'react-redux'

class AdminPage extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div>
        {this.props.user && this.props.user.isAdmin ?
          <h2>You are logged in as an Admin</h2> :
          <h2>You are not logged in as an Admin</h2>}
      </div>
    )

  }

}

const mapState = state => ({
  user: state.user

})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(AdminPage)
