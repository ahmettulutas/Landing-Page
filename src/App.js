import './App.css';
import Header from './header.jsx';
import Homepage from './homepage.jsx';
import ContactForm from './contactForm.jsx';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Footer from "./footer";
function App() {
  return (
    <div className="app">
      <Router>
      <Header />
      <Routes>
          <Route exact path="/" element={<Homepage />}/>
          <Route path="/contact-form" element={<ContactForm />}/>
          <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer />
      </Router>
    </div>
);
}

export default App;
