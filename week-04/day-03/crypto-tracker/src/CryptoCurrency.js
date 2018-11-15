import React, { Component } from 'react'

class CryptoCurrency extends Component {
  logo = () => {
    return `https://s2.coinmarketcap.com/static/img/coins/16x16/${
      this.props.id
    }.png
    `
  }

  price = () => {
    return this.props.price.toFixed(2)
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.symbol}</td>
        <td>{this.price()}</td>
        <td>
          <img src={this.logo()} />
        </td>
      </tr>
    )
  }
}

export default CryptoCurrency
