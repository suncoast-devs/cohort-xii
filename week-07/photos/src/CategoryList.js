import React, { Component } from 'react'

import photos from './photos.json'

class CategoryList extends Component {
  render() {
    return (
      <ul>
        {Object.keys(photos).map(category => {
          return (
            <li key={category}>
              <a href={`/${category}`}>{photos[category].title}</a>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default CategoryList
