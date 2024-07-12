import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import "./Nav.css";
import "../../App.css";
import Logo from "../../assets/logo.png";
import { navLinks, navRight } from "../../Data/Data";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

export default function Nav() {
    const [isNavLinksShowing, setIsNavLinksShowing] = useState(false);

    return (
        <div>
            <div className="container nav-container">
                <Link to={"/"} className="logo">
                    <img src={Logo} alt="Logo"></img>
                </Link>
                {/* Nav Links */}
                <ul
                    className={`nav-links ${
                        isNavLinksShowing ? "navLinksShow" : "navLinksHide"
                    }`}
                >
                    {navLinks.map(({ name, path }, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) => {
                                        return isActive ? "active" : "";
                                    }}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                {/* Nav-Right */}
                <div className="nav-right">
                    {navRight.managements.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                //target="_blank"
                                className="management-icons"
                                to={item.link}
                            >
                                <item.icon />
                            </Link>
                        );
                    })}
                    <button
                        className="menu-button"
                        onClick={() => {
                            return setIsNavLinksShowing(!isNavLinksShowing);
                        }}
                    >
                        {!isNavLinksShowing ? <VscMenu /> : <GrClose />}
                    </button>
                </div>
            </div>
        </div>
    );
}
