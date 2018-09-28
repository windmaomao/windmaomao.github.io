// third party
import React from 'react';
import ReactDOM from 'react-dom';
// styles
import './index.css';
// primary component
import App from './App';
// services
import registerServiceWorker from './registerServiceWorker';
import {defaultArticleId, storedKeys} from './constant';
import AppStore from './store';
// local
const store = new AppStore();

const getArticleId = () => {
  const id = localStorage.getItem(storedKeys.articleId) || defaultArticleId;
  return id;
};

const renderApp = () => {
  ReactDOM.render(
    <App menu={store.menu} articleId={getArticleId()} article={store.article} />, 
    document.getElementById('root')
  );
};

store.fetchArticle(getArticleId());
store.fetchMenu();
renderApp();
registerServiceWorker();
