import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Header = props => {

  return (
    <Link to="/" className="logo">
      <div>
        <h1>ANY CONSOLATION</h1>
      </div>
    </Link>
  )
}

export default Header
