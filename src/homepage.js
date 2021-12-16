import React from 'react'
import Typewriter from "typewriter-effect";
import './homepage.css'
export default function Homepage() {
    return (
    <main className="main-grid-section">
        <article>
            <h1>This is Ahmet Ulutaş's Landing Page</h1>
            <aside className="type-writer-aside">
            <p className="type-writer">I'm a <Typewriter 
                    options={{
                    strings: ['Self-Taught Programmer', 'React.js Student' ,'English Teacher'],
                    autoStart: true,
                    loop: true,
                    delay:100}}/>
            </p>
            </aside>
            <aside>
                <p>Trying to learn <span id="react">React.js </span>on my own. Got some cool projects. Contact me for bussiness cooperation.</p>
                <p>Gonna publish my own landing page here soon.</p>
            </aside>
        </article> 
        <figure>
            
        </figure>
    </main>
    )
}
