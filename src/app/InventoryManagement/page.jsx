'use client';

import Head from 'next/head';
import Image from 'next/image';
import '../components/ServicesPage/InventoryManagement.css';
import { FaBoxes, FaClipboardList, FaTruckLoading, FaChartBar } from 'react-icons/fa';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';

const InventoryManagement = () => {
  return (
    <>
      <Head>
        <title>Inventory Management Services | Optimize Stock & Fulfillment - Aanya Solutions</title>
        <meta
          name="description"
          content="Aanya Solutions provides reliable inventory management services including tracking, purchasing, and audit analysis. Streamline your supply chain with our expert support."
        />
        <meta
          name="keywords"
          content="inventory management services, inventory tracking, order fulfillment, inventory audit, stock optimization, inventory solutions India, Aanya Solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.aanyasolutions.com/inventorymanagement" />
      </Head>

      <Nav />

      <div className="inventory-container">
        <h1 className="inventory-title">Streamlined Inventory Management Solutions</h1>

        <Image
          src="/invantry.jpg"
          alt="Inventory Management"
          width={400}
          height={400}
          className="inventory-image"
        />

        <p className="inventory-text">
          At Aanya Solutions, we understand that inventory management can be a real challenge. That's why we offer streamlined solutions to help you get it right. No more stockouts, no more wasted money. We provide real-time data and expert advice so you can make smart decisions. Partner with us, and you can focus on the fun parts of your business, like growing and innovating.
        </p>

        <h2 className="inventory-subtitle">Our Key Services</h2>

        <div className="inventory-features">
          <div className="feature-box">
            <FaBoxes className="feature-icon boxes-icon" />
            <h3 className="feature-title">Inventory Tracking</h3>
            <p className="feature-text">
              Keeping tabs on your inventory can feel like a juggling act. Lost stock means unhappy customers, missed sales, and wasted money. Our inventory tracking solutions offer more than just data entry; they provide real-time insights, automate tedious manual tasks, and eliminate discrepancies. Imagine knowing exactly what you have, when you need it. This lets you make smart ordering decisions, avoid stockouts, and empowers your team to focus on creating amazing customer experiences.
            </p>
          </div>

          <div className="feature-box">
            <FaClipboardList className="feature-icon clipboard-icon" />
            <h3 className="feature-title">Order Fulfillment (Purchasing)</h3>
            <p className="feature-text">
              Tired of wrestling with manual purchase orders? We've got you covered. Our streamlined approach makes the whole process easier. We'll automate parts like creating and sending orders, and our expert team ensures everything's accurate. This means faster approvals, better communication with your suppliers, and more control over your spending, so you can focus on what matters most.
            </p>
          </div>

          <div className="feature-box">
            <FaChartBar className="feature-icon chart-icon" />
            <h3 className="feature-title">Inventory Audit & Analysis</h3>
            <p className="feature-text">
              We're dedicated to ensuring your inventory data is reliable and accurate. We understand the critical role it plays in your business decisions. Our specialized Inventory Audits and Analysis services offer a comprehensive review, going beyond simple checks. We provide strategic insights, empowering you to make continuous improvements and optimize your inventory management.
            </p>
          </div>
        </div>
      </div>

      <Whatsapp />
      <Footer />
    </>
  );
};

export default InventoryManagement;
