import * as React from 'react'
import { Outlet } from "react-router-dom";
import SignInSide from "../../components/aluno/loginAluno/SignIn";
import SignUpAluno from "../../components/aluno/cadastroAluno/SignUp";

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
  ],
}];

export default alunoRoutes