import React from 'react';
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <a className="li" target="_blank" rel="noreferrer" href="https://github.com/ahmettulutas"> check my github</a>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;