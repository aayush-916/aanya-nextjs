'use client';

import Head from 'next/head';
import Image from 'next/image';
import '../components/ServicesPage/BackOfficeDetail.css';
import { FaTasks, FaUserCheck, FaDatabase, FaChartLine } from 'react-icons/fa';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';

const BackOfficeDetail = () => {
  return (
    <>
      <Head>
        <title>Back Office Services | Efficient Data Entry & Audit - Aanya Solutions</title>
        <meta
          name="description"
          content="Aanya Solutions offers professional back office services including data entry, record maintenance, audits, and analysis for businesses in the USA. Reliable and cost-effective support from India."
        />
        <meta
          name="keywords"
          content="back office services, data entry, record maintenance, data audits, data analysis, business support India, Aanya Solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.aanyasolutions.com/BackOfficeDetail" />
      </Head>

      <Nav />
      <div className="backoffice-container">
        <h1 className="backoffice-title">Professional Back Office Management Services for Scalable Growth</h1>

        <Image
          src="/job.jpg"
          alt="Back Office Operations"
          width={400}
          height={400}
          className="backoffice-image"
        />

        <p className="backoffice-text">
          At Aanya Solutions, we understand the backbone of any successful business lies in its back office operations. Our Back Office Management services empower businesses across the USA to streamline day-to-day administrative processes, reduce overhead, and enhance organizational productivity. Whether you’re a startup, SME, or enterprise, we deliver tailored support that allows you to focus on growth while we manage the rest.
        </p>

        <h2 className="backoffice-subtitle">What We Offer</h2>

        <div className="backoffice-features">
          <div className="feature-box">
            <FaTasks className="feature-icon task-icon" />
            <h3 className="feature-title center">DATA ENTRY</h3>
            <p className="feature-text">
              Our skilled team, trained experts in systems like Profit Systems (Retail Vantage), ensures seamless data entry. As soon as your sales team completes a ticket, we quickly and accurately input the details, keeping your workflow smooth.
            </p>
          </div>

          <div className="feature-box">
            <FaUserCheck className="feature-icon user-icon" />
            <h3 className="feature-title center">RECORD MAINTENANCE</h3>
            <p className="feature-text">
              We’re dedicated to ensuring your records are in good hands. We offer comprehensive record management services that streamline your business processes and ensure your data is stored systematically and accurately. Our digital records are kept with a detailed audit trail, guaranteeing the authenticity and integrity of your information.
            </p>
          </div>

          <div className="feature-box">
            <FaDatabase className="feature-icon data-icon" />
            <h3 className="feature-title center">DATA AUDIT</h3>
            <p className="feature-text">
              Imagine having complete confidence in your data. Our experienced auditors are here to make that a reality. They carefully review every entry from our data team, catching errors before they become problems. This proactive approach ensures your data is accurate and reliable, giving you the peace of mind you need to make informed decisions.
            </p>
          </div>

          <div className="feature-box">
            <FaChartLine className="feature-icon chart-icon" />
            <h3 className="feature-title center">DATA ANALYSIS</h3>
            <p className="feature-text">
              We believe your data should tell a clear and compelling story. Our team expertly consolidates your MIS reports into a single, unified document. This strategic approach enhances clarity and makes it easier to extract key insights, empowering you to make informed, strategic decisions.
            </p>
          </div>
        </div>

        <h2 className="backoffice-subtitle">Why Choose Aanya Solutions?</h2>

        <p className="backoffice-text">
          We combine expertise with cutting-edge tools to deliver consistent, secure, and result-driven back office services. Our team works as an extension of your business, offering full transparency, scalable support, and unmatched accuracy. Businesses in the United States rely on our trusted services to manage back-end tasks while boosting operational efficiency.
        </p>

        <p className="backoffice-text">
          With a strong focus on confidentiality, efficiency, and customization, Aanya Solutions ensures your business runs smoothly behind the scenes. Let us manage the complexities, so you can focus on innovation, customer experience, and long-term growth.
        </p>
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default BackOfficeDetail;
