import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';
export default function Header () {
    return (
        <header>
            <h1>AUCode</h1>
            <nav>
                <ul>
                    <Link className="li" to="/">HOME</Link>
                    <Link className="li" to="/contact-form">CONTACT ME</Link>
                </ul>
            </nav>
        </header>
    )
}
