import React from 'react';
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <a className="li" href="https://github.com/ahmettulutas">CHECK MY GITHUB</a>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;