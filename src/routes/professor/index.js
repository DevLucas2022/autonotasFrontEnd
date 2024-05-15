import * as React from 'react'
import { Outlet } from "react-router-dom";
import SignUpProfessor from "../../components/professor/cadastroProfessor/SignUp";
import SignInSideProfessor from "../../components/professor/loginProfessor/SignIn";
import CriarDisciplina from '../../components/professor/criarDisciplina';
import ListaDisciplinaAlunos from '../../components/professor/listaDisciplinaAlunos';
import AdicionarDisciplinaAluno from '../../components/professor/adicionarAlunoDisciplina';
import AtualizaNotasAluno from '../../components/professor/atualizarNotasAluno';

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
      }
    ],
  }];
  
  export default professorRoutes