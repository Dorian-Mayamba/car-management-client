import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/navbar.css';

export default class Navbar extends React.Component {
    render(): React.ReactNode {
        return (
            <header>
                <nav className="navbar-container">
                    <ul className="nav">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/car">All cars</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Register">Sign up</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Login">Login</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}