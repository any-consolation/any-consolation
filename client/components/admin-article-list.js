import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAdminArticleListThunk } from '../store'

class AdminArticleList extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getAdminArticleList()
  }

  render() {

    return (
      <div>
        <h2>Article List</h2>
        {this.props.user && this.props.user.isAdmin && this.props.adminArticleList && this.props.adminArticleList.map(x => (
          <div key={x.id}>
            <h2>title: {x.title}</h2>
          </div>
        ))}
      </div>
    )

  }

}

const mapState = state => ({
  user: state.user,
  adminArticleList: state.adminArticleList
})

const mapDispatch = dispatch => ({
  getAdminArticleList() {
    dispatch(getAdminArticleListThunk())
  }
})

export default connect(mapState, mapDispatch)(AdminArticleList)
