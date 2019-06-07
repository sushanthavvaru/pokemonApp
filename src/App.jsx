import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './Components/Header'
import Home from './Components/Home'
import Details from './Components/Details'
import ExploreSearch from './Components/ExploreSearch'

class App extends Component{

  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Switch>
              <header className="App-header">
                <Header>
                  <div className="contents">
                    <Route path = '/' exact component = {Home} />
                    <Route path = '/details/:id' component = {Details} />
                    <Route path = '/exploreSearch' component = {ExploreSearch} />

                  </div>
                </Header>
              </header>
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
