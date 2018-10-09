// third party
import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import {Router} from 'react-router-dom';
import {Provider} from 'mobx-react';
// styles
import './index.css';
// primary components
import Layout from './Layout';
import App from './App';
// services
import registerServiceWorker from './registerServiceWorker';
import AppStore from './Store';
// locals
const basename = '/scheduler';
const history = createBrowserHistory({ basename });
const store = new AppStore();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </Router>, 
  document.getElementById('root')
);

registerServiceWorker();
