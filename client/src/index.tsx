// import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './index.css';
import { UserProvider } from './state/UserContext';
import {AuthProvider } from './state/AuthContext';



ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </UserProvider>
    </BrowserRouter>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);
