import * as React from 'react'
import { Outlet } from "react-router-dom";
import SignInSide from "../../components/aluno/loginAluno/SignIn";
import SignUpAluno from "../../components/aluno/cadastroAluno/SignUp";
import Home from "../../components/aluno/home/home"
import useAuth from '../../hooks/useAuth';

const Private = ({ Item }) => {
  const {signed} = useAuth();

  return signed > 0 ? <Item /> : <SignInSide />;
}

const alunoRoutes = [{
  path: 'aluno',
  element: <Outlet />,
  children: [
    {
        path: 'login',
        element: <SignInSide />
    },
    {
        path: 'cadastro',
        element: <SignUpAluno />
    },
    {
      path: 'home',
      element: <Private Item={Home}/>
    },
  ],
}];

export default alunoRoutes