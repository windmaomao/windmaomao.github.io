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

function bootstrapReactApp() {
  const app = new AppStore();
  const render = () => {
    const Root = <App app={app} />;
    ReactDOM.render(Root, document.getElementById('root'));
  };
  return app.initApp().then(render);
}

bootstrapReactApp();
registerServiceWorker();
