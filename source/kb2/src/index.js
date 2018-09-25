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
// local
// const defaultArticleId = 'todo/fang';
const defaultArticleId = 'resume/frontend';

const renderApp = (menu) => {
  const articleId = defaultArticleId;
  ReactDOM.render(
    <App menu={menu} articleId={articleId} />, 
    document.getElementById('root')
  );
};

const createApp = () => {
  return ApiService.getMenu()
    .then(renderApp);
};

createApp();
registerServiceWorker();
