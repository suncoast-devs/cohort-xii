import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Add from './Pages/Add';
class App extends Component {

  render() {
    return (
      <Router>
        <>
          <div className="App">
            <header className="App-header">
              <p>
                Jabberdexicon
              </p>
            </header>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/add" exact component={Add} />
            </Switch>
          </div>
        </>
      </Router>

    );
  }
}

export default App;
