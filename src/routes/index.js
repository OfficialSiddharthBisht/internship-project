import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import AuthMainLayout from '../layout/AuthMainLayout';
import MainLayout from '../layout/MainLayout';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Deposit from '../pages/Deposit';
import Support from '../pages/Support';
import FAQ from '../pages/FAQ';
import Page_404 from '../pages/common/Page_404';
import Profile from '../pages/Profile';
import Labels from '../pages/Labels';
import NewLabel from '../pages/NewLabel';
import LabelCreated from '../pages/LabelCreated';

function Router() {
    return useRoutes([
        {
            paht: "",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <Dashboard />,
                },
                {
                    path: "/deposits",
                    element: <Deposit />
                },
                {
                    path: "/support",
                    element: <Support />
                },
                {
                    path: "/faq",
                    element: <FAQ />
                },
                {
                    path: "/profile",
                    element: <Profile />
                },
                {
                    path: "/labels",
                    element: <Labels />
                },
                {
                    path: "/newLabel",
                    element: <NewLabel />
                },
                {
                    path: "/labelcreated",
                    element: <LabelCreated />
                }
            ]
        },
        {
            path: "",
            element: <AuthMainLayout />,
            children: [
                // {
                //     path: "signup",
                //     element: <Signup />,
                // },
                // {
                //     path: "login",
                //     element: <Login />
                // },
            ]
        },
        { path: "/404", element: <Page_404 /> },
        { path: "*", element: <Navigate to="/404" replace /> }
    ])
};

export default Router;