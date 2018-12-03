import React, { Component } from 'react'

class PhotoList extends Component {
  render() {
    return (
      <ul className="photolist">
        <li>
          <p>Panda Waving</p>
          <a href="https://codeburst.io/pandas-for-data-stuff-code-challenge-7972207a8294">
            <img src="https://cdn-images-1.medium.com/max/1600/1*i1vVm3EqqDIkyucD0079wg.jpeg" />
          </a>
        </li>
        <li>
          <p>Großer Panda im Ocean Park, Hongkong </p>
          <a
            href="https://en.wikipedia.org/wiki/Giant_panda
"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/2560px-Grosser_Panda.JPG
"
            />
          </a>
        </li>
      </ul>
    )
  }
}

export default PhotoList
