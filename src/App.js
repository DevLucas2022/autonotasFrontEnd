import './App.css';
import './components/aluno/loginAluno/SignIn'
import SignInSideAluno from './components/aluno/loginAluno/SignIn';
import SignUpAluno from './components/aluno/cadastroAluno/SignUp';
import SignInSideProfessor from './components/professor/loginProfessor/SignIn';
import SignUpProfessor from './components/professor/cadastroProfessor/SignUp';
import React from 'react';
import {BrowserRouter as Route, Routes} from 'react-router-dom';
import LandingPage from './components/home/LandingPage';

function App() {
  return (
    <>
      <SignInSideAluno />
    </>
  );
}

export default App;
