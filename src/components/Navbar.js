import React from 'react';
import {NavbarData} from "../static/NavbarData";
import {Link} from "react-router-dom";
import {ReactComponent as CovidIcon} from "../svgs/coronavirus_black_24dp.svg";

function Navbar() {
    return (
        <div className="navBar">
            <div className="navBar-logo">
            
                <p>covidex</p>
                <CovidIcon/>
            </div>
            <div className="navBar-items">
            <ul>
                {NavbarData.map((item,index)=>{
                    return(
                        <Link key={index} to={item.path} className="linkClass">
                        <li  className={item.cName}>

                                <div className="linkIcon">
                                    {item.icon}
                                </div>
                               <p className="linkTitle">{item.title}</p>


                        </li>
                </Link>
                    )
                })}
            </ul>
            </div>
        </div>
    );
}

export default Navbar;
