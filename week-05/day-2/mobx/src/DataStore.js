import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'

// All our application's data will be here

class DataStore {
  constructor() {
    this.value = 0
  }

  increment = () => {
    this.value++
  }

  decrement = () => {
    this.value--
  }
}

// Tell the App component that it has
// mobx superpowers, and that the `value`
// should be observable
decorate(DataStore, {
  value: observable
})

let ourOneAndOnlyDataStore = new DataStore()

export default ourOneAndOnlyDataStore
