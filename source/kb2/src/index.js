// third party
import React from 'react';
import ReactDOM from 'react-dom';
// styles
import './index.css';
// primary component
import App from './App';
// services
import registerServiceWorker from './registerServiceWorker';
import AppStore from './store';

const renderApp = () => {
  const app = new AppStore();
  ReactDOM.render(
    <App app={app} />, 
    document.getElementById('root')
  );
};

renderApp();
registerServiceWorker();
