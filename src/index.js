import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PrendaProvider} from './context/prendas'
import {CartProvider} from './context/cart'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <PrendaProvider>
  <CartProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartProvider>
</PrendaProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
