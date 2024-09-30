import React from 'react';
import { HashRouter as Router } from "react-router-dom";  // Changed to HashRouter
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
