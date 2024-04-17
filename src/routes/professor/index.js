import * as React from 'react'
import { Outlet } from "react-router-dom";
import SignUpProfessor from "../../components/professor/cadastroProfessor/SignUp";
import SignInSideProfessor from "../../components/professor/loginProfessor/SignIn";

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
      }
    ],
  }];
  
  export default professorRoutes