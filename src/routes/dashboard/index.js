import * as React from 'react'
import LandingPage from "../../components/home/LandingPage";
import alunoRoutes from "../aluno";
import professorRoutes from "../professor";
import { Outlet } from 'react-router-dom';

const dashboardRoutes = [{
  path: '/dashboard',
  element: <Outlet />,
  children: [
    {
      path: '',
      element: <LandingPage/>
    },
    ...alunoRoutes,
    ...professorRoutes
  ],
}];
  
export default dashboardRoutes;