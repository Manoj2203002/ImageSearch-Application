import { useEffect } from 'react';
import React  from 'react';
import './Contact.css';

const Contact = () => {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  })
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have a question or need support? Fill out the form below or reach out to us via email.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>📧 Email: support@mygallery.com</p>
        <p>📍 Address: Gandhi nagar, Five Roads,  Salem, Tamil Nadu</p>
      </div>
    </div>
  );
};

export default Contact;
