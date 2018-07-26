import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div className="bottomnav" >
    <hr />
    <nav>
      <div>
        <h6>writers: </h6>
      </div>
      {isLoggedIn ? (
        <div className="bottomMenu">
          {/* The navbar will show these links after you log in */}
          <Link to="/userHome" className="text">My Articles</Link>
          <a href="#" className="text" onClick={handleClick}>
            Logout
          </a>
          {isAdmin &&
            <Link to="/admin" className="text">Admin Page</Link>}
        </div>
      ) : (
          <div className="bottomMenu text">
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
