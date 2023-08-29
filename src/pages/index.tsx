import { createBrowserRouter, Navigate } from "react-router-dom";
import TodosPage from "./TodosPage.tsx";
import UsersPage from "./UsersPage.tsx";
import Layout from "@/pages/Layout.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'todos',
                element: <TodosPage />,
            },
            {
                path: 'users',
                element: <UsersPage />,
            },
            {
                path: '*',
                element: <Navigate to='/todos' />,
            },
        ]
    },
])
