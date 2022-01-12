import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './context/ContextProvider';



ReactDOM.render(
    <BrowserRouter> 
     <ContextProvider> 
         <App />
    </ContextProvider>
    </BrowserRouter>,
  document.getElementById('root')
);


