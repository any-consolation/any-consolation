import React, { Component } from 'react'
import { connect } from 'react-redux'

class ArticleCard extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <h4>{this.props.tagLine}</h4>
      </div>
    )
  }
}
