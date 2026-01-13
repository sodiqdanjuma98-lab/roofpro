import './App.css';
import './Services.css';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      name: 'Roof Maintenance Services',
      description: 'Keep your roof in peak condition year-round.',
      image: 'https://source.unsplash.com/featured/?roof,inspection'
    },
    {
      name: 'Roof Leak Repair Services',
      description: 'Fast, reliable repairs to stop leaks and prevent damage.',
      image: 'https://source.unsplash.com/featured/?roof,leak,repair'
    },
    {
      name: 'Repairing Roof Caps, Valleys, and Drip Edges',
      description: 'Detailed repairs to all critical roof components for lasting protection.',
      image: 'https://source.unsplash.com/featured/?roof,valley,repair'
    },
    {
      name: 'Roof and Gutter Cleaning Services',
      description: 'Clear debris and prevent costly water damage with regular cleaning.',
      image: 'https://source.unsplash.com/featured/?gutter,cleaning'
    },
    {
      name: 'Storm Response Services',
      description: 'Emergency response after storms to protect your property immediately.',
      image: 'https://source.unsplash.com/featured/?storm,damage,roof'
    },
    {
      name: 'Roof Repairs',
      description: 'Quick and professional repairs to extend the life of your roof.',
      image: 'https://source.unsplash.com/featured/?roof,repair,shingles'
    },
    {
      name: 'Roof Restoration',
      description: 'Bring your old roof back to life with quality restoration services.',
      image: 'https://source.unsplash.com/featured/?roof,restoration'
    },
    {
      name: 'Complete Roof Replacement',
      description: 'Full roof replacements using durable, premium materials for ultimate protection.',
      image: 'https://source.unsplash.com/featured/?roof,replacement,new'
    }
  ];

  return (
    <div className="page services-page">
      <div className="hero">
        <h1>Comprehensive Roofing Services You Can Count On</h1>
      </div>
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
  );
}

export default Services;
