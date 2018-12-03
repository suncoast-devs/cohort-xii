import React, { Component } from 'react'

class CategoryList extends Component {
  render() {
    return (
      <ul>
        <li>
          <a href="/pandas">Panda Bears</a>
        </li>
        <li>
          <a href="/miniatures">Miniatures</a>
        </li>
      </ul>
    )
  }
}

export default CategoryList
