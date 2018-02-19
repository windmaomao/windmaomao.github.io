import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import './index.css';

// import App from './App';
// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );

import Slider from './Slider';
ReactDOM.render(
  <Slider isOpen={true} />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
