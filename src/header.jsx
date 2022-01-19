import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';
import { useNavigate } from 'react-router-dom';
export default function Header () {
    const navigate = useNavigate()
    return (
        <header>
            <h1 onClick={() => navigate("/")}>AUCode</h1>
            <nav>
                <ul>
                    <Link className="header-li" to="/">HOME</Link>
                    <Link className="header-li" to="/contact-form">CONTACT ME</Link>
                </ul>
            </nav>
        </header>
    )
}
