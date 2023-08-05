import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { createStore } from 'redux'
import rootReducer from './redux/reducer/cart';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>
);
