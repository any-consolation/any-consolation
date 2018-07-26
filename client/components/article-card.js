import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'

const ArticleCard = (props) => {

  return (
    <div>
      <Link to={`/articles/${props.url}`} className="clickable-text">
        <h3>{props.title}</h3>
        <h5><i>{props.tagLine}</i></h5>
        <h4> by {props.author}</h4>
      </Link>
    </div>
  )
}

export default ArticleCard
