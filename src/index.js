import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {store} from './store/store';
import {Provider} from 'react-redux';
ReactDOM.render(
  <Provider store={store} >
  <BrowserRouter>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
