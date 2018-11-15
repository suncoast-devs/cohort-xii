import React, { Component } from 'react'
import CryptoCurrency from './CryptoCurrency'
import currencies from './currencies.json'

class CryptoCurrencies extends Component {
  render() {
    const data = currencies['data']

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
          {Object.values(data).map(currency => (
            <CryptoCurrency
              name={currency.name}
              symbol={currency.symbol}
              price={currency.quotes.USD.price}
              id={currency.id}
            />
          ))}
        </tbody>
      </table>
    )
  }
}

export default CryptoCurrencies
