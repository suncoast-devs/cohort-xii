import React, { Component } from 'react'

import photos from './photos.json'

class PhotoDetail extends Component {
  render() {
    const category = this.props.match.params.category
    const photoIndex = this.props.match.params.index

    const categoryData = photos[category]

    if (!categoryData) {
      return <p>No Such Category</p>
    }

    if (photoIndex >= categoryData.photos.length) {
      return <p>No Such Photo</p>
    }

    const photo = categoryData.photos[photoIndex]
    if (!photo) {
      return <p>WAT?!?</p>
    }

    return (
      <>
        <h2>{categoryData.photos[photoIndex].title}</h2>
        <img src={categoryData.photos[photoIndex].imageURL} />
      </>
    )
  }
}

export default PhotoDetail
