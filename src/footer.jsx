import React from 'react';
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <Link className="li" to="/">CHECK MY GITHUB</Link>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;