import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { persistor, Store } from './store';

import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={Store}>
    <PersistGate loadin={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
