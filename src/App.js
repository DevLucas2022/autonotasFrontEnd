import './App.css';
import React from 'react';
import RoutesApp from './routes';
import { AuthProvider } from './context/auth';


function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
}

export default App;
