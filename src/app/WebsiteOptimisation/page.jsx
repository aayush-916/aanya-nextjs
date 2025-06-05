'use client';

import React from 'react';
import Head from 'next/head';
import { FaChartLine, FaSearch, FaRocket, FaMobileAlt } from 'react-icons/fa';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Whatsapp from '../components/Whatsapp';
import '../components/ServicesPage/WebsiteOptimisation.css'

const WebsiteOptimisation = () => {
  return (
    <>
      <Head>
        <title>Website Optimization Services | Speed, SEO & UX – Aanya Solutions</title>
        <meta
          name="description"
          content="Enhance website performance with Aanya Solutions. We boost site speed, SEO, responsiveness, and UX to help you rank higher and convert better."
        />
        <meta
          name="keywords"
          content="website optimization, SEO services, site speed improvement, responsive web design, UX optimization, website performance, Aanya Solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.aanyasolutions.com/websiteoptimisation" />
      </Head>

      <Nav />

      <div className="service-detail-container">
        <div className="service-detail-header">
          <h1 className="service-title">Website Optimization</h1>
          <p className="service-subtitle">
            Speed, performance, SEO & responsiveness – we fine-tune your website for results.
          </p>
        </div>

        <div className="service-detail-content">
          <div className="service-image-wrapper">
            <img src="/invantry.jpg" alt="Website Optimization" className="service-image" />
          </div>

          <div className="service-text">
            <p>
              At Aanya Solutions, we specialize in professional website optimization services tailored to elevate your
              digital presence. A well-designed website isn't enough – it needs to perform. Our expert team works to
              improve your website’s speed, mobile responsiveness, SEO ranking, and user experience. The result?
              Faster load times, more visitors, and higher conversions.
            </p>

            <p>
              Our website optimization service is particularly beneficial for businesses in the USA looking to scale
              online visibility and performance. From enhancing core web vitals to fixing broken links, we make sure
              your website not only looks great but also works smoothly across all devices and browsers.
            </p>

            <p>
              Search engines like Google prioritize websites that load quickly, are mobile-friendly, and have clean code.
              That’s why our optimization process covers every essential factor — compressing images, minifying code,
              enabling caching, and improving server response times. All these updates directly impact your SEO and
              increase your chances of ranking higher in search results.
            </p>

            <p>
              We also work on optimizing content structure, keyword placement, and internal linking. Our SEO-driven
              optimization ensures that your site is not just faster, but also discoverable. Whether you're running
              a corporate website, eCommerce store, or service platform, we align the site with your business goals
              and audience expectations.
            </p>

            <p>
              With Aanya Solutions, you're not just getting technical improvements — you're getting a full-fledged
              strategy to help your website generate more leads, retain users, and create a seamless user journey.
            </p>
          </div>
        </div>

        <div className="service-features">
          <div className="feature-card">
            <FaChartLine className="feature-icon center-icon" />
            <h3>Performance Boost</h3>
            <p>We reduce load time and increase your website’s speed across all devices.</p>
          </div>

          <div className="feature-card">
            <FaSearch className="feature-icon center-icon" />
            <h3>SEO Optimization</h3>
            <p>Our strategies help your site rank higher in Google and attract more traffic.</p>
          </div>

          <div className="feature-card">
            <FaMobileAlt className="feature-icon center-icon" />
            <h3>Mobile Responsiveness</h3>
            <p>We ensure your website adapts perfectly to all screen sizes and browsers.</p>
          </div>

          <div className="feature-card">
            <FaRocket className="feature-icon center-icon" />
            <h3>Conversion Focused</h3>
            <p>We optimize layout and functionality to improve user experience and engagement.</p>
          </div>
        </div>
      </div>

      <Whatsapp />
      <Footer />
    </>
  );
};

export default WebsiteOptimisation;
