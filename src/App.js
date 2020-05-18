import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Error from './components/Error';
import SideBar from './components/SideBar';
import './index.css';

class App extends Component {
  render() {
    return (     
        <BrowserRouter>
          <SideBar />
          <Switch>
            <Route path="/ListBank" component={Home} exact/>
            <Route component={Error}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
