import './App.css';
import './Services.css';
import { Link } from 'react-router-dom';
import roofmain from './assets/roofmain.jpg'
import roofleak from './assets/roofleak.jpg'
import restorer from './assets/restore.jpg'
import replace from './assets/replace.jpg'
import service from './assets/services.jpg'

function Services() {
  const services = [
    {
      name: 'Roof Maintenance Services',
      description: 'Regular roof maintenance is essential to prolong the life of your roof and prevent costly damage. Our team inspects, cleans, and performs preventive care, ensuring your roof remains strong, leak-free, and weather-resistant year-round.',
      image: roofmain
    },
    {
      name: 'Roof Leak Repair Services',
      description: 'Leaks can quickly damage your property if left untreated. We identify the source, repair leaks efficiently, and reinforce vulnerable areas, protecting your home or business from water damage and structural issues.',
      image: roofleak
    },
    {
      name: 'Repairing Roof Caps, Valleys, and Drip Edges',
      description: 'These critical roof components protect your home from water infiltration and weather damage. We repair or replace roof caps, valleys, and drip edges, ensuring maximum durability, proper water drainage, and long-lasting performance.',
      image: restorer
    },
    {
      name: 'Roof and Gutter Cleaning Services',
      description: 'Debris, leaves, and dirt can clog gutters and damage roofs. Our professional cleaning services remove buildup, prevent water damage, and improve roof longevity, keeping your home safe, clean, and well-maintained.',
      image: 'https://source.unsplash.com/featured/?gutter,cleaning'
    },
    {
      name: 'Storm Response Services',
      description: 'After severe weather, immediate roof attention is crucial. Our storm response team quickly assesses damage, provides emergency repairs, and restores structural integrity, giving you peace of mind and protection from further issues.',
      image: 'https://source.unsplash.com/featured/?storm,damage,roof'
    },
    {
      name: 'Roof Repairs',
      description: 'From minor damage to major issues, our roof repair services restore functionality and appearance. We use quality materials and skilled workmanship to fix leaks, broken shingles, and damaged structures efficiently and reliably.',
      image: service
    },
    {
      name: 'Roof Restoration',
      description: 'Bring your old or worn roof back to life. Our restoration services improve durability, enhance appearance, and extend the roof’s lifespan, providing a cost-effective solution compared to a complete replacement.',
      image: 'https://source.unsplash.com/featured/?roof,restoration'
    },
    {
      name: 'Complete Roof Replacement',
      description: 'When repairs aren’t enough, we provide full roof replacement using premium materials and expert installation. Our team ensures a durable, weather-resistant, and aesthetically pleasing roof that protects your property for decades.',
      image: replace
    }
  ];

  return (
    <>
      <div className="son">
        <div className="hero">
          <h1>Comprehensive Roofing Services You Can Count On</h1>
        </div>
      </div>
      <div className="page services-page">
        <div className="container">
          <p>From maintenance to full replacements, RoofPro Experts LLC provides complete roofing solutions for residential and commercial properties. Every service is performed by experienced professionals using quality materials for lasting results.</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <img src={service.image} alt={service.name} />
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <div className="cta-section">
            <Link to="/contact"><button className="cta-button">Schedule Your Roof Service Today</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
