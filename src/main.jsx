import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GlobalProvider } from './context/GlobalContext.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <GlobalProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GlobalProvider>

);
