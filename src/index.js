import React from 'react';
import ReactDOM from 'react-dom';
import App from './root/App';
import * as serviceWorker from './config/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();