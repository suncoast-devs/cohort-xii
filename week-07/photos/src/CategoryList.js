import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import photos from './photos.json'

class CategoryList extends Component {
  render() {
    return (
      <ul>
        {Object.keys(photos).map(category => {
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
