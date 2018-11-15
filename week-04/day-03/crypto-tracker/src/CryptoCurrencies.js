import React, { Component } from 'react'
import CryptoCurrency from './CryptoCurrency'

class CryptoCurrencies extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coins: []
    }
  }

  fetchCoins = () => {
    fetch(`https://api.coinmarketcap.com/v2/ticker/?limit=${this.props.count}`)
      .then(response => response.json())
      .then(apiData => {
        this.setState({
          coins: apiData['data']
        })
      })
  }

  componentDidMount = () => {
    this.fetchCoins()

    // Every 10 seconds, please call the function
    // this.fetchCoins
    setInterval(this.fetchCoins, 10 * 1000)
  }

  render() {
    return (
      <table>
        <thead>
          <th>
            <td>Name</td>
          </th>
          <th>
            <td>Symbol</td>
          </th>
          <th>
            <td>Price</td>
          </th>
          <th>
            <td>Logo</td>
          </th>
        </thead>
        <tbody>
          {Object.values(this.state.coins).map(currency => (
            <CryptoCurrency
              key={currency.id}
              name={currency.name}
              symbol={currency.symbol}
              price={currency.quotes.USD.price}
              id={currency.id}
              highPrice={this.props.highPrice}
            />
          ))}
        </tbody>
      </table>
    )
  }
}

export default CryptoCurrencies
