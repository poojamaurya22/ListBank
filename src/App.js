import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Error from './components/Error';
import './index.css';

class App extends Component {
  render() {
    return (     
        <BrowserRouter>
          <div id="mySidebar" className="sidebar">
            <a href="#">BANKS</a>
          </div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route component={Error}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
