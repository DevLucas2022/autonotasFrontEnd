import * as React from 'react'
import { Outlet } from "react-router-dom";
import SignInSide from "../../components/aluno/loginAluno/SignIn";
import SignUpAluno from "../../components/aluno/cadastroAluno/SignUp";
import ListaNotas from '../../components/aluno/listaNotas';
import Dashboard from '../../components/aluno/graficoAluno/Dashboard';

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
        path: 'notas/:id',
        element: <ListaNotas />
    },
    {
        path: 'graficos',
        element: <Dashboard />
    }
  ]
}];

export default alunoRoutes