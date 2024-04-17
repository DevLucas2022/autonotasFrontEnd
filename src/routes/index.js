import * as React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import dashboardRoutes from "./dashboard";

function Redirect(){
    window.location.href = '/dashboard';
    return <>Redirecting</>
}

function RoutesApp(){
    const routes = createBrowserRouter([
        {
            path: '/',
            element: (
                <Outlet />
            ),
            children: [
                {
                    path: '',
                    element: <Redirect />
                },
                ...dashboardRoutes,
            ]
        }
    ])
    return <RouterProvider router={routes}/>
}

export default RoutesApp