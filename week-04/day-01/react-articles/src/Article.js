import React, { Component } from 'react'

class Article extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
        <a href="#">read more</a>
      </article>
    )
  }
}

export default Article
