import React, {useState, useEffect} from 'react';
import './contactForm.css';
import axios from 'axios';
export default function ContactForm() {
    const [form, setForm] = useState({name:"", surname:"", email:"", message:""})
    const [style, setStyle] = useState("")
    const [message, setMessage] = useState("")
        const handleChange= (e) => { 
            const {name, value} = e.target;
            setForm(prev => ({...form, [name]:value})) 
            console.log(form)  
        }


    const handleSubmit = (e) => {
        console.log(new FormData(e.target))
        const urlCode = e.target.action
        const method = e.target.method
        e.preventDefault();
        axios({
            method:method,
            url:urlCode,
            data:form
        }).then(response => {
            setMessage(prev => "Your message has been successfully sent!")
            setStyle(prev => "success")
            
        })
        .catch(err => {
            setMessage(prev => "An error occured while sending the message. Please try again")
            setStyle(prev => "fail")
        })
        setForm({name:"", surname:"", email:"", message:""})
    }
    return (
        <main className="main-grid-section">
        <section className="form-box">
        <h1>Contact Me</h1>
        <form action="https://formspree.io/f/xvoloork" method="POST" onSubmit={handleSubmit}>
        <section className="input-section">
            <label htmlFor="name">
            Name
            </label>
            <input
            onChange={handleChange}
            id="name"
            type="text" 
            name="name"
            value={form.name}
            />
        </section>  
        <section className="input-section">
            <label htmlFor="name">
            Surname
            </label>
            <input
            onChange={handleChange}
            id="surname"
            type="text" 
            name="surname"
            value={form.surname}
            />
        </section>            
        <section className="input-section">
            <label htmlFor="email">
            Email Address
            </label>
            <input
            onChange={handleChange}
            id="email"
            type="email" 
            name="email"
            value={form.email}
            />
        </section>
        <section className="input-section">
            <label htmlFor="message">
            Your Message
            </label>
            <textarea
            onChange={handleChange}
            id="message"
            name="message"
            value={form.message}
            />
        </section>
        <button id="submit-button" type="submit">
          Send
        </button>
      </form>
      <h1 className={style}>{message}</h1>
      </section>
      </main>
    )
}
