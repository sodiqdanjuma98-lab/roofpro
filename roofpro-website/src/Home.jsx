import './App.css';
import './Home.css';
import { Link } from 'react-router-dom';
import modern from './assets/mordern.jpg'

function Home() {
  return (
    <>
      <div className="hon">
        <img src="https://source.unsplash.com/featured/?roof,home" className="background-image" alt="Roof home background" />
        <div className="hero">
          <h1>Protecting What Matters Most, One Roof at a Time</h1>
          <p>Professional roofing services for homes and businesses in Nashville, TN. Reliable, durable, and customer-focused.</p>
          <Link to="/contact"><button className="cta-button">Request Your Free Estimate Today</button></Link>
        </div>
      </div>
      <div className="page home-page">
        <div className="container">
          <div className="about-snippet">
            <h2>Our Mission</h2>
            <p>To provide exceptional roofing services that protect and enhance the value of our clients' properties, ensuring long-lasting durability and peace of mind.</p>
            <Link to="/about"><button className="cta-button">Learn More</button></Link>
          </div>
          <div className="highlights">
            <div className="highlight">
              <h3>Trusted Roofing Experts</h3>
              <p>Delivering top-quality installation, repair, and maintenance.</p>
            </div>
            <div className="highlight">
              <h3>Residential & Commercial Services</h3>
              <p>Tailored to your needs.</p>
            </div>
            <div className="highlight">
              <h3>Honest Pricing & Skilled Craftsmanship</h3>
              <p>Peace of mind guaranteed.</p>
            </div>
          </div>
          <div className="hero-image">
            <img src={modern} alt="Modern home with new roof" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
