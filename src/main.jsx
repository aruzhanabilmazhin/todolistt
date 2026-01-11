import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import './styles.css'; // стили импортируются здесь

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
