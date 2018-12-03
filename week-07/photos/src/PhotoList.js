import React, { Component } from 'react'
import photos from './photos.json'

class PhotoList extends Component {
  render() {
    const categoryData = photos['miniatures']

    return (
      <ul className="photolist">
        {categoryData.photos.map(photo => {
          return (
            <li>
              <p>{photo.title}</p>
              <a href={photo.sourceURL}>
                <img src={photo.imageURL} />
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default PhotoList
