// libraries
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
// styles
import './index.css';
// components
import App from './App';
// services
import * as serviceWorker from './serviceWorker';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
