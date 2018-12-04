import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import photos from './photos.json'

class CategoryList extends Component {
  render() {
    const categories = Object.keys(photos)

    return (
      <ul>
        {categories.map(category => {
          return (
            <li key={category}>
              <Link to={`/${category}`}>{photos[category].title}</Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default CategoryList
