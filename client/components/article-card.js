import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'

const ArticleCard = (props) => {

  return (
    <div>
      <Link to={`/articles/${props.url}`}>
        <h3>{props.title}</h3>
        <h4>{props.tagLine}</h4>
        <h5>by {props.author}</h5>
      </Link>
    </div>
  )
}

export default ArticleCard
