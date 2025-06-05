'use client';

import React from 'react';
import '../components/ServicesPage/WebsiteDesigning.css';
import { FaLaptopCode, FaCogs, FaEdit } from 'react-icons/fa';
import Whatsapp from '../components/Whatsapp';
import Footer from '../components/Footer';
import Nav from '../components/Nav';


const WebsiteDesigning = () => {
  return (
    <>

      <Nav />

      <div className="website-container">
        <h1 className="website-title">Professional Website Designing Services</h1>

        <img src="/web.jpg" alt="Website Designing" className="website-image" />

        <p className="website-text">
          In today's digital age, a well-executed website is the cornerstone of a strong online presence.
          At Aanya Solutions, we believe in a personalized approach to website development, combining creative
          design with technical excellence. We're committed to understanding your specific needs and goals, and
          we're passionate about helping businesses in technology, healthcare, finance, and beyond achieve their
          online objectives through impactful and user-friendly websites.
        </p>

        <h2 className="website-subtitle">Our Key Services</h2>

        <div className="website-features">
          <div className="feature-box">
            <FaLaptopCode className="feature-icon laptop-icon" />
            <h3 className="feature-title">Custom Web Development</h3>
            <p className="feature-text">
              Navigating today's dynamic digital environment demands solutions that resonate with your unique
              business needs. We recognize the limitations of a generic approach. That's why we specialize in
              custom web development, crafting bespoke digital experiences designed to precisely align with your
              strategic goals. When you partner with us, you're not just gaining developers; you're gaining a team
              of dedicated professionals who are invested in understanding your vision and exceeding your expectations.
            </p>
          </div>

          <div className="feature-box">
            <FaCogs className="feature-icon cogs-icon" />
            <h3 className="feature-title">Content Management System (CMS)</h3>
            <p className="feature-text">
              Effective content management is essential for building and sustaining a compelling online presence.
              A Content Management System (CMS) provides a strategic framework for controlling and optimizing your
              digital content. It offers an accessible and intuitive environment for content creation and modification,
              eliminating the need for specialized technical skills. By simplifying website management, a CMS empowers
              businesses to efficiently maintain a relevant and engaging online experience, fostering stronger connections
              with their audience.
            </p>
          </div>

          <div className="feature-box">
            <FaEdit className="feature-icon edit-icon" />
            <h3 className="feature-title">Responsive Design</h3>
            <p className="feature-text">
              With the increasing use of mobile devices, having a responsive website is no longer optional.
              We ensure that your website looks and functions flawlessly across all devices, providing an optimal
              user experience that keeps your audience engaged, regardless of how they access your site.
            </p>
          </div>
        </div>
      </div>

      <Whatsapp />
      <Footer />
    </>
  );
};

export default WebsiteDesigning;
