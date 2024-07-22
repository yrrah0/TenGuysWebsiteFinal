import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global CSS file
import App from './App'; // Main App component

// Render the App component into the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);