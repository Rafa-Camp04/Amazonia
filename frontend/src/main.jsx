import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './store/store';
import csrfFetch, { restoreCSRF } from './store/csrf';

const store = configureStore();

if (import.meta.env.MODE !== 'production') {
  window.store = store;
}

<<<<<<< HEAD

restoreCSRF()

=======
>>>>>>> 9696b2bdef156d6a14ccac98ef818146e2e261db
if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
}

<<<<<<< HEAD
=======
restoreCSRF();

>>>>>>> 9696b2bdef156d6a14ccac98ef818146e2e261db
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
