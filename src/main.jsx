import React from 'react';
import ReactDOM from 'react-dom/client';
// Точка и слэш (./) означают текущую папку (src)
import App from './App.jsx'; 
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);