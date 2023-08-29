import React from 'react';
import { Outlet } from "react-router";
import { Header } from "@/widgets";

const Layout = () => {
    return (
        <>
            <Header />

            <Outlet />
        </>
    );
};

export default Layout;
