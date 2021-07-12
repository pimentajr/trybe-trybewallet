import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Wallet from './pages/Wallet';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}
export default App;
