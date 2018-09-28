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
    <App menu={app.menu} article={app.article} />, 
    document.getElementById('root')
  );
};

renderApp();
registerServiceWorker();
