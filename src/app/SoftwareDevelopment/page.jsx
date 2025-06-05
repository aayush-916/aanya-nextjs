'use client';
import React from 'react';
import '../components/ServicesPage/SoftwareDevelopment.css'
import { FaLaptopCode, FaServer, FaDatabase, FaCogs } from 'react-icons/fa';
import Nav from '../components/Nav';
import Whatsapp from '../components/Whatsapp';
import Footer from '../components/Footer';


const SoftwareDevelopment = () => {
  return (
    <>

      <Nav />

      <div className="service-detail-container">
        <div className="service-detail-header">
          <h1 className="service-title">Software Development</h1>
          <p className="service-subtitle">
            Scalable, secure, and tailor-made software solutions for modern businesses.
          </p>
        </div>

        <div className="service-detail-content">
          <div className="service-image-wrapper">
            <img src="/website.jpg" alt="Software Development" className="service-image" />
          </div>

          <div className="service-text">
            <p>
              At Aanya Solutions, we offer end-to-end software development services designed to simplify operations,
              streamline processes, and accelerate growth. Whether you're a startup looking for your first application
              or an established business needing a custom system, we build reliable and efficient software tailored to
              your exact needs.
            </p>

            <p>
              Our development process starts with understanding your goals and challenges. We then design intuitive,
              user-friendly applications using modern technologies. From desktop software to cloud-based solutions,
              we ensure everything we build is scalable, secure, and easy to use.
            </p>

            <p>
              Our dedicated team of developers, designers, and testers collaborate closely with you throughout the
              process. We use agile methodologies for flexibility, quick iteration, and on-time delivery. Whether it’s
              a CRM, ERP system, inventory software, or a custom dashboard, we ensure your solution supports your
              long-term business goals.
            </p>

            <p>
              We also provide ongoing maintenance, updates, and technical support to keep your software performing
              optimally. Our goal is to empower your business with tools that save time, reduce errors, and increase
              efficiency.
            </p>

            <p>
              With our software development services, businesses in the USA and beyond gain a competitive advantage
              through automation, data integration, and better decision-making capabilities.
            </p>
          </div>
        </div>

        <div className="service-features">
          <div className="feature-card">
            <FaLaptopCode className="feature-icon center-icon" />
            <h3>Custom Solutions</h3>
            <p>We develop software tailored to your unique business processes and needs.</p>
          </div>

          <div className="feature-card">
            <FaServer className="feature-icon center-icon" />
            <h3>Secure Architecture</h3>
            <p>Security is built-in from the ground up to protect your data and workflows.</p>
          </div>

          <div className="feature-card">
            <FaDatabase className="feature-icon center-icon" />
            <h3>Data Integration</h3>
            <p>We integrate your software with other platforms for seamless data flow and reporting.</p>
          </div>

          <div className="feature-card">
            <FaCogs className="feature-icon center-icon" />
            <h3>Scalable Infrastructure</h3>
            <p>Our software grows with your business, supporting future expansion and features.</p>
          </div>
        </div>
      </div>

      <Whatsapp />
      <Footer />
    </>
  );
};

export default SoftwareDevelopment;
