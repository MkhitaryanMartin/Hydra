import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function OutletIndex(){
    return (
        <div>
            <Header/>
            <div className="globalDiv"></div>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default OutletIndex