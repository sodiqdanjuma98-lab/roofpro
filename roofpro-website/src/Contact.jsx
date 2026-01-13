import './App.css';
import './Contact.css';

function Contact() {
  return (
    <div className="page contact-page">
      <div className="hero">
        <h1>Get in Touch With RoofPro Experts LLC</h1>
      </div>
      <p>We’re here to answer your questions and provide expert roofing solutions. Reach out via email, phone, or stop by our office in Nashville.</p>
      <div className="contact-info">
        <p><strong>Address:</strong> 1303 Saturn Dr, Nashville, TN 37217</p>
        <p><strong>Email:</strong> EBrenner@roofproexpllc.com</p>
        <div className="cta-buttons">
          <button className="cta-button">Request a Free Estimate</button>
          <button className="cta-button">Call Us Now</button>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit" className="cta-button">Submit</button>
        </form>
      </div>
      <div className="images">
        <img src="https://source.unsplash.com/featured/?nashville,map" alt="Map of Nashville location" />
        <img src="https://source.unsplash.com/featured/?office,staff" alt="Friendly office staff" />
      </div>
    </div>
  );
}

export default Contact;
