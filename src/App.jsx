import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './Components/Header'
import Home from './Components/Home'
import Explore from './Components/Explore'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Switch>
            <header className="App-header">
              <Header>
                <div className="contents">
                  <Route path = '/' exact component = {Home} />
                  <Route path = '/explore' component = {Explore} />
                </div>
              </Header>
            </header>
            
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
