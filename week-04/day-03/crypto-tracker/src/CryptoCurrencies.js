import React, { Component } from 'react'
import axios from 'axios'
import CryptoCurrency from './CryptoCurrency'

class CryptoCurrencies extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coins: [],
      ignoredCoins: [52]
    }
  }

  addCurrencyIDToIgnoredCoins = currencyID => {
    let newIgnoredCoins = this.state.ignoredCoins

    newIgnoredCoins.push(currencyID)

    this.setState({
      ignoredCoins: newIgnoredCoins
    })
  }

  fetchCoins = () => {
    let url = `https://api.coinmarketcap.com/v2/ticker/?limit=${
      this.props.count
    }`

    axios.get(url).then(response => {
      this.setState({
        coins: response.data['data']
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
          {Object.values(this.state.coins).map(currency => {
            if (this.state.ignoredCoins.includes(currency.id)) {
              return null
            }

            return (
              <CryptoCurrency
                key={currency.id}
                name={currency.name}
                symbol={currency.symbol}
                price={currency.quotes.USD.price}
                id={currency.id}
                highPrice={this.props.highPrice}
                addCurrencyIDToIgnoredCoins={this.addCurrencyIDToIgnoredCoins}
              />
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default CryptoCurrencies
