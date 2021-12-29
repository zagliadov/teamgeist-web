// import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './index.css';
import { UserProvider } from './state/UserContext';
import { AuthProvider } from './state/AuthContext';
import { ProjectProvider } from './state/ProjectContext';
import { UserTypeProvider } from './state/UserTypeContext';



ReactDOM.render(
  <BrowserRouter>
    <UserTypeProvider>
      <UserProvider>
        <ProjectProvider>

          <AuthProvider>
            <App />
          </AuthProvider>

        </ProjectProvider>
      </UserProvider>
    </UserTypeProvider>

  </BrowserRouter>
  ,
  document.getElementById('root')
);
