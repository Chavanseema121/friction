import React from 'react';
import { HashRouter as Router } from "react-router-dom";  // Use HashRouter for GitHub Pages
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Render the React app with HashRouter to support GitHub Pages
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);

