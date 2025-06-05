import '../styles/About.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import Head from 'next/head';

const About = () => {
  return (
    <section className="about-section">
      <Head>
        <title>About Us | Back Office & Inventory Management Services - Aanya Solutions</title>
        <meta
          name="description"
          content="Learn more about Aanya Solutions – your trusted partner for professional back office work, inventory management, data entry, and report creation services in the USA."
        />
        <meta
          name="keywords"
          content="back office work company in India, inventory management company, data entry services, report creation services, low-cost back office support, Aanya Solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.aanyasolutions.com/about" />
      </Head>

      <Nav />

      <div className="about-container">
        <div className="about-image">
          <img src="/idea.jpg" alt="Team Working" />
        </div>
        <h2 className="about-title center">WHO WE ARE</h2>
        <div className="about-flex">
          <div className="about-text">
            <p>
              Aanya Solutions is your dedicated partner for streamlined business operations and impactful digital presence. Based in India, we empower businesses of all sizes to thrive by providing expert solutions in crucial back-office functions, efficient inventory management, captivating graphic design, and cutting-edge website development.
            </p>
            <p>
              We understand that navigating the complexities of modern business requires a multifaceted approach. That’s why we’ve assembled a talented team of professionals passionate about delivering tangible results. We’re not just a service provider; we become an extension of your team, committed to understanding your unique needs and crafting tailored strategies that drive efficiency, enhance your brand, and accelerate your growth.
            </p>
            <p>
              At Aanya Solutions, we believe in clarity, collaboration, and a client-centric approach. We strive to build long-term relationships based on trust and a shared vision for success. Let us handle the intricacies, so you can focus on what you do best – leading and growing your business.
            </p>
          </div>
        </div>

        <div className="vision-mission-section">
          <div className="vision">
            <h3 className="center">Our Vision</h3>
            <p>
              Our vision is to become the foremost trusted partner for businesses across industries — empowering them with forward-thinking, innovative solutions that drive sustainable growth, operational efficiency, and digital excellence in an ever-evolving world.
            </p>
          </div>
          <div className="mission">
            <h3 className="center">Our Mission</h3>
            <p>
              To provide tailored, high-quality services in back-office management, inventory optimization, graphic design, and website development, driving tangible results and building lasting partnerships based on trust and shared success.
            </p>
          </div>
        </div>

        <div className="about-image">
          <img src="/woman.png" alt="Team Collaboration" />
        </div>

        <div className="core-values">
          <h3 className="center">What Makes Us Different</h3>
          <p>
            Our people. Our process. Our passion. We go beyond delivering services – we form strategic partnerships. Every project we take on is infused with deep understanding, constant communication, and a relentless pursuit of improvement. Our team takes pride in turning complex problems into simple, effective solutions that create measurable impact for our clients.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default About;
