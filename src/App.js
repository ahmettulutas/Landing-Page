import './App.css';
import Header from './header';
import Homepage from './homepage';
import ContactForm from './contactForm';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/contact-form" element={<ContactForm />}/>
      </Routes>
      </Router>
    </div>
);
}

export default App;
