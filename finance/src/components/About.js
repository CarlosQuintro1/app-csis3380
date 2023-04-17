import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <div>
        <Navbar/>
        <div className="about-container">
        
        <h1 className="about-heading">About Pepe Finance</h1>
        <p className="about-paragraph">
          Pepe Finance is a financial platform designed to help individuals make informed decisions about their investments. Our platform provides access to a wide range of financial products, including stocks, bonds, mutual funds, and more. Our team of financial experts is dedicated to helping our users achieve their investment goals.
        </p>
        <h2 className="about-subheading">Our Mission</h2>
        <p className="about-paragraph">
          Our mission is to democratize access to financial products and services. We believe that everyone should have the opportunity to invest in their future, regardless of their background or financial situation. By providing easy-to-use tools and educational resources, we aim to empower individuals to take control of their financial well-being.
        </p>
        <h2 className="about-subheading">Our Values</h2>
        <ul className="about-list">
          <li className="about-list-item">Transparency</li>
          <li className="about-list-item">Accessibility</li>
          <li className="about-list-item">Integrity</li>
          <li className="about-list-item">Innovation</li>
        </ul>
      </div>
    <Footer/>
    </div>
    
  );
}

export default About;