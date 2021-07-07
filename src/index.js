import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Wallet from './pages/Wallet';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={ store } >
    <BrowserRouter>
      <Route path="/" exact render={(props) => <App {...props} />} />
      <Route path="/carteira" exact component={Wallet} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
