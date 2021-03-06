// import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './index.css';
import { UserProvider } from './state/UserContext';
import { ProjectProvider } from './state/ProjectContext';
import { UserTypeProvider } from './state/UserTypeContext';
import { AppProvider } from './state/AppContext';


ReactDOM.render(
  <BrowserRouter>
    <UserTypeProvider>
      <UserProvider>
        <ProjectProvider>
          <AppProvider>
              <App />
          </AppProvider>
        </ProjectProvider>
      </UserProvider>
    </UserTypeProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
