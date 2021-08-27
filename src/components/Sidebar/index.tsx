import React from "react";

import  "./index.css"
import { Link } from "react-router-dom";

interface SidebarProps{
    iconConsult: string,
    iconHome: string,
}

export default function Sidebar(props: SidebarProps){
    return(
        <div>
            <div className="container">
                <Link to="/">
                    <img src={props.iconHome} alt="home" />
                </Link>
                <Link to="/Company">
                    <img src={props.iconConsult} alt="consulta" />
                </Link>
            </div>
        </div>
    )
}