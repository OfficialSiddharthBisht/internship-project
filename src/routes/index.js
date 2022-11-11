import React from 'react'
import { useRoutes } from 'react-router-dom';
import AuthMainLayout from '../layout/AuthMainLayout';
import MainLayout from '../layout/MainLayout';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

function Router() {
    return useRoutes([
        {
            paht: "",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <Dashboard />,
                }
            ]
        },
        {
            path: "",
            element: <AuthMainLayout />,
            children: [
                {
                    path: "signup",
                    element: <Signup />,
                },
                {
                    path: "login",
                    element: <Login />
                },
            ]
        }
    ])
};

export default Router;