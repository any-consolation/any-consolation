import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { email } = props

  return (
    <div className="text">
      <h2>any-consolation User Portal</h2>
      <div>
        <h3>we need a table of our own articles here</h3>
      </div>
      <div>
        <button>maybe a button to go to the new article input form</button>
      </div>
      <div>
        <h3>we need to be able to enter a new article here</h3>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
