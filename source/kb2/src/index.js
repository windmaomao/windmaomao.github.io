// third party
import React from 'react';
import ReactDOM from 'react-dom';
// styles
import './index.css';
// primary component
import App from './App';
// services
import ApiService from './Api';
import registerServiceWorker from './registerServiceWorker';
import {defaultArticleId, storedKeys} from './constant';

const getArticleId = () => {
  const id = localStorage.getItem(storedKeys.articleId) || defaultArticleId;
  return id;
};

const renderApp = (menu) => {
  ReactDOM.render(
    <App menu={menu} articleId={getArticleId()} />, 
    document.getElementById('root')
  );
};

const createApp = () => {
  return ApiService.getMenu().then(renderApp);
};

createApp();
registerServiceWorker();
