import * as React from 'react'
import { Outlet } from "react-router-dom";
import SignUpProfessor from "../../components/professor/cadastroProfessor/SignUp";
import SignInSideProfessor from "../../components/professor/loginProfessor/SignIn";
import CriarDisciplina from '../../components/professor/criarDisciplina';
import ListaDisciplinaAlunos from '../../components/professor/listaDisciplinaAlunos';
import AdicionarDisciplinaAluno from '../../components/professor/adicionarAlunoDisciplina';
import AtualizaNotasAluno from '../../components/professor/atualizarNotasAluno';
import ListaDisciplinas from '../../components/professor/listaDisciplinas';
import Dashboard from '../../components/professor/graficoProfessor/Dashboard';

const professorRoutes = [{
    path: 'professor',
    element: <Outlet />,
    children: [
      {
          path: 'login',
          element: <SignInSideProfessor />
      },
      {
          path: 'cadastro',
          element: <SignUpProfessor />
      },
      {
        path: 'disciplinas',
        element: <ListaDisciplinas />
      },
      {
        path: 'disciplina/criar',
        element: <CriarDisciplina />
      },
      {
        path: 'disciplina/lista/:idDisciplina',
        element: <ListaDisciplinaAlunos />
      },
      {
        path: 'disciplina/aluno/cria/:idDisciplina',
        element: <AdicionarDisciplinaAluno />
      },
      {
        path: 'disciplina/aluno/atualiza/:idAlunoDisciplina/:idDisciplina',
        element: <AtualizaNotasAluno />
      },
      {
        path: 'graficos',
        element: <Dashboard />
      }
    ],
  }];
  
  export default professorRoutes