import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
    return (
        <div className={"max-w-7xl mx-auto"}>

            {/*Navbar section*/}
            <Navbar></Navbar>

            {/*home section*/}
            <div className={"min-h-[calc(100vh-290px)]"}>
            <Outlet></Outlet>
            </div>

            {/*Footer section*/}
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;