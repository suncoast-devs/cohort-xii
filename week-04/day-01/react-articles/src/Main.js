import React, { Component } from 'react'

import Article from './Article'
import articles from './articles.json'

class Main extends Component {
  render() {
    return (
      <main>
        {articles.map(article => (
          <Article title={article.title} body={article.body} />
        ))}
      </main>
    )
  }
}

export default Main
