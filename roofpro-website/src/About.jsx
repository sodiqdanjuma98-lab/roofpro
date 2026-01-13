import './App.css';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="page about-page">
      <div className="hero">
        <h1>Professional. Trustworthy. RoofPro Experts LLC.</h1>
      </div>
      <div className="description">
        <p>RoofPro Experts LLC has been protecting homes and businesses in Nashville with top-tier roofing services. Our mission is simple: deliver strong, weather-resistant roofs, backed by integrity, quality materials, and unmatched craftsmanship.</p>
        <p>We specialize in both residential and commercial roofing, providing tailored solutions that fit your property, budget, and timeline. Every project is a promise of durability, excellence, and customer satisfaction.</p>
      </div>
      <div className="mission-vision">
        <div className="section">
          <h2>Our Mission</h2>
          <p>To provide exceptional roofing services that protect and enhance the value of our clients' properties, ensuring long-lasting durability and peace of mind.</p>
        </div>
        <div className="section">
          <h2>Our Vision</h2>
          <p>To be the leading roofing company in Nashville, recognized for our commitment to quality, innovation, and customer satisfaction.</p>
        </div>
        <div className="section">
          <h2>Core Values</h2>
          <p>We are committed to integrity, creativity, and collaboration, believing that trust and transparency lead to successful partnerships and outstanding results.</p>
        </div>
      </div>
      <div className="cta-section">
        <Link to="/services"><button className="cta-button">Learn More About Our Services</button></Link>
      </div>
      <div className="images">
        <img src="https://source.unsplash.com/featured/?team,roof" alt="Team on a roof" />
        <img src="https://source.unsplash.com/featured/?hands,shingles" alt="Skilled hands installing shingles" />
        <img src="https://source.unsplash.com/featured/?roof,before,after" alt="Before and after roof repair" />
      </div>
    </div>
  );
}

export default About;
