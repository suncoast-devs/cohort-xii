import React, { Component } from 'react'
import photos from './photos.json'

import { Link } from 'react-router-dom'

class PhotoList extends Component {
  render() {
    const category = this.props.match.params.category
    const categoryData = photos[category]

    if (!categoryData) {
      return <p>No Such Category</p>
    }

    return (
      <ul className="photolist">
        {categoryData.photos.map((photo, index) => {
          return (
            <li key={index}>
              <Link to={`/${category}/${index}`}>
                <p>{photo.title}</p>

                <img src={photo.imageURL} />
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default PhotoList
