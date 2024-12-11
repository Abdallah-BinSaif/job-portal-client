import React, {useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/large64.png"
import AuthContext from "../auth/AuthContext.jsx";

const Navbar = () => {
    const {currentUser, signOutUser} = useContext(AuthContext)

    const list = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/2"}>Item 2</NavLink></li>
        <li><NavLink to={"/3"}>Item 3</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            list
                        }
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-xl">
                    <img src={logo}/>
                    SkillMatch</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        list
                    }
                </ul>
            </div>

            {
                currentUser ?
                    <div className="navbar-end">
                    <img
                        className={"w-12 h-12 mr-2 rounded-full"}
                        title={currentUser.displayName}
                        alt={currentUser.displayName}
                        src={currentUser?.photoURL}/>
                    <button onClick={signOutUser} className="btn">Log Out</button>
                </div>
                    : <div className="navbar-end">
                    <Link to={"/register"}>Register</Link>
                    <Link to={"/login"} className="btn">Login</Link>
                </div>
            }

        </div>
    );
};

export default Navbar;