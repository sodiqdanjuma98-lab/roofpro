import "./App.css";
import "./About.css";
import { Link } from "react-router-dom";
import team from './assets/team.jpg'
import shin from './assets/shin.jpg'

function About() {
  return (
    <>
    
      <div className="con">
        <div className="hero">
          <h1>Professional. Trustworthy. RoofPro Experts LLC.</h1>
        </div>
      </div>
      
      <div className="page about-page">
        <div className="container">
          <div className="descri">
            <div className="descr">
              <h6>WHO WE ARE</h6>
              <h2>Protecting Homes and Businesses, One Roof at a Time</h2>
            </div>
            <div id="descr">
              <h1>
                At RoofPro Experts LLC, we deliver reliable roofing solutions that
                safeguard properties and enhance their longevity.
              </h1>
              <p>
                RoofPro Experts LLC specializes in residential and commercial
                roofing, including repairs, maintenance, restorations, and complete
                replacements. With a focus on quality craftsmanship, durable
                materials, and dependable service, we ensure every project is
                completed efficiently and to the highest standard. Committed to
                integrity, customer satisfaction, and long-lasting results, we
                provide roofing solutions that protect what matters most while
                keeping your property secure, functional, and visually appealing.
              </p>
            </div>
          </div>
          <div className="mission-vision">
            <div className="section">
              <h2>Our Mission</h2>
              <p>
                To provide exceptional roofing services that protect and enhance the
                value of our clients' properties, ensuring long-lasting durability
                and peace of mind.
              </p>
            </div>
            <div className="section">
              <h2>Our Vision</h2>
              <p>
                To be the leading roofing company in Nashville, recognized for our
                commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>
            <div className="section">
              <h2>Core Values</h2>
              <p>
                We are committed to integrity, creativity, and collaboration,
                believing that trust and transparency lead to successful
                partnerships and outstanding results.
              </p>
            </div>
          </div>
          <div className="cta-section">
            <Link to="/services">
              <button className="cta-button">Learn More About Our Services</button>
            </Link>
          </div>
          <div className="images">
            <img
              src={team}
              alt="Team on a roof"
            />
            <img
              src={shin}
              alt="Skilled hands installing shingles"
            />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
