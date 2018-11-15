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

  classNameBasedOnPrice = () => {
    if (this.props.price > this.props.highPrice) {
      return 'high-price'
    } else {
      return ''
    }
  }

  handleIgnore = event => {
    let currencyIDToIgnore = this.props.id

    console.log(`Ignoring this currency with id ${currencyIDToIgnore}`)
    this.props.addCurrencyIDToIgnoredCoins(currencyIDToIgnore)
  }

  render() {
    return (
      <tr className={this.classNameBasedOnPrice()}>
        <td>
          <button onClick={this.handleIgnore}>Ignore</button>
          {this.props.name}
        </td>
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
