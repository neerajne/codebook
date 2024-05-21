import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css" ;
import App from './App';
import { ScrollToTop } from './components/ScrollToTop';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  
  <Router>
  <ToastContainer/>
  <ScrollToTop/>
    <App />
    </Router>
    
  </React.StrictMode>
);


