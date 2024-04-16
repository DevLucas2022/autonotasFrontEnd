import { Box, Typography } from '@mui/material';
import './App.css';
import './components/aluno/loginAluno/SignIn'
import SignInSideAluno from './components/aluno/loginAluno/SignIn';
import SignUpAluno from './components/aluno/cadastroAluno/SignUp';
import SignInSideProfessor from './components/professor/loginProfessor/SignIn';
import SignUpProfessor from './components/professor/cadastroProfessor/SignUp';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/* COLOCAR ESSAS ROTAS NO SWITCH <Route exact path="/" component={Home} />
<Route component={NotFound} /> */
function App() {
  return (
    <SignInSideAluno/>
  );
  return (
    <SignUpAluno/>
  );
  return (
    <SignInSideProfessor/>
  );
  return (
    <SignUpProfessor/>
  );
  return (
    <Router>
      <div>
        <Switch>
 
          <Route path="/professorSignIn" component={SignInSideProfessor} />
          <Route path="/professorSignUp" component={SignUpProfessor} />
          <Route path="/alunoSignIn" component={SignInSideAluno} />
          <Route path="/alunoSignUp" component={SignUpAluno} />
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
