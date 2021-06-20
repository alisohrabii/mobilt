import React from 'react';
import ReactDOM from 'react-dom';
import AuthContextProvider from './context/AuthContext';
import ProductContextProvider from './context/ProductContext';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
  <AuthContextProvider>
  <ProductContextProvider>
    <App />
    </ProductContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
 ,
  document.getElementById('root')
);

