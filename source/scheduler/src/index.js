// third party
import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import {Router} from "react-router-dom";
// styles
import './index.css';
// primary components
import Layout from './Layout';
import App from './App';
// services
import registerServiceWorker from './registerServiceWorker';
// locals
const basename = '/scheduler';
const history = createBrowserHistory({ basename });


ReactDOM.render(
  <Router history={history}>
    <Layout>
      <App />
    </Layout>
  </Router>, 
  document.getElementById('root')
);

registerServiceWorker();
