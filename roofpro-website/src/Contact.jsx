import './App.css';
import './Contact.css';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    if (window.location.hash === '#contact-form') {
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <div className="don">
        <div className="hero">
          <h1>Get in Touch With RoofPro Experts LLC</h1>
        </div>
      </div>
      <div className="page contact-page">
        <div className="container">
          <p>We’re here to answer your questions and provide expert roofing solutions. Reach out via email, phone, or stop by our office in Nashville.</p>
          <div className="contact-info">
            <p><strong>Address:</strong> 1303 Saturn Dr, Nashville, TN 37217</p>
            <p><strong>Email:</strong> EBrenner@roofproexpllc.com</p>
            <div className="cta-buttons">
              <button className="cta-button">Request a Free Estimate</button>
              <button className="cta-button">Call Us Now</button>
            </div>
          </div>
          <div className="form-map-container">
            <div className="contact-form">
              <h2>Send us a message</h2>
              <form id="contact-form" onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                  Message:
                  <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                </label>
                <button type="submit" className="cta-button">Submit</button>
              </form>
            </div>
            <div className="map">
              <MapContainer center={[36.1627, -86.7816]} zoom={13} className="map-container">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[36.1627, -86.7816]}>
                  <Popup>1303 Saturn Dr, Nashville, TN 37217</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
          <div className="images">
            <img src="https://source.unsplash.com/featured/?office,staff" alt="Friendly office staff" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
