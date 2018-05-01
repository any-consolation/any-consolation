import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'

const ArticleCard = (props) => {

  return (
    <div>
      <Link to={`/articles/${props.url}`}>{props.title}</Link>
    </div>
  )
}

export default ArticleCard
