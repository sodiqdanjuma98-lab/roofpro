import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import logo from './assets/logo.png'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo"><img src={logo } alt="RoofPro Logo" /></Link>
            <div className="hamburger" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
              <li><Link to="/" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>Home</Link></li>
              <li><Link to="/about" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>About</Link></li>
              <li><Link to="/services" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>Services</Link></li>
              <li><Link to="/contact" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>Contact</Link></li>
            </ul>
            {/* <Link to="/contact#contact-form" onClick={() => window.scrollTo(0, 0)}><button className="cta-button">Get a Quote</button></Link> */}
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>Contact Info</h3>
              <p>Phone: (615) 555-1234</p>
              <p>Email: info@roofproexperts.com</p>
              <p>Address: 123 Main St, Nashville, TN 37201</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                <li><Link to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link></li>
                <li><Link to="/services" onClick={() => window.scrollTo(0, 0)}>Services</Link></li>
                <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Our Vision</h3>
              <p>To be the leading roofing company in Nashville, recognized for our commitment to quality, innovation, and customer satisfaction.</p>
            </div>
          </div>
          <p>&copy; 2023 RoofPro Experts LLC. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
