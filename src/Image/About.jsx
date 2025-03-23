import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  })
  return (
    <div className="about-container">
      <h1>About MyGallery</h1>
      <p>
        Welcome to <strong>MyGallery</strong>, a platform where you can explore and discover beautiful images from around the world. 
        Powered by the <strong>Pixabay API</strong>, we bring you high-quality, royalty-free images for all your creative needs.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to provide a seamless experience for users to search, preview, and download stunning images effortlessly. 
        Whether you're a designer, content creator, or just someone who loves photography, MyGallery is here for you.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>📷 Access to thousands of high-quality images.</li>
        <li>🔎 Fast and efficient image search.</li>
        <li>📂 Free to use with no copyright issues.</li>
      </ul>
    </div>
  );
};

export default About;
