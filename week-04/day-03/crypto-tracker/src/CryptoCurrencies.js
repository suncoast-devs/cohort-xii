import React, { Component } from 'react'
import CryptoCurrency from './CryptoCurrency'

class CryptoCurrencies extends Component {
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
          <CryptoCurrency name="Bitcoin" symbol="BTC" price={1000.0} id={1} />
          <CryptoCurrency name="Litecoin" symbol="LTC" price={42.0} id={2} />
          <CryptoCurrency name="XRP" symbol="XRP" price={0.455} id={52} />
        </tbody>
      </table>
    )
  }
}

export default CryptoCurrencies
