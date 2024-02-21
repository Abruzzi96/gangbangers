// src/components/Header.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../global.css';

const Header = () => {
    useEffect(() => {
        document.title = "GangBangers";
    }, []);
    return (
        <header className="header">
            <nav>
                <ul className="nav-links"> 
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/robbery">Robbery</Link>
                    </li>
                    <li>
                        <Link to="/chat">Chat</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
