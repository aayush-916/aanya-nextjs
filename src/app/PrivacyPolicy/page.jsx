'use client';

import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../components/PrivacyPolicy.css';
import Whatsapp from '../components/Whatsapp';

function PrivacyPolicy() {
  return (
    <>

      <Nav />

      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-updated">Last updated: May 2025</p>

        <section className="privacy-section fade-in">
          <h2 className="privacy-heading">1. Introduction</h2>
          <p>
            At Aanya Solutions, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect the personal information you share with us through our website and services. By using our services, you agree to the terms outlined in this policy.
          </p>
        </section>

        <section className="privacy-section fade-in">
          <h2 className="privacy-heading">2. Information We Collect</h2>
          <p>
            We may collect personal information that you provide directly, such as your name, email address, phone number, business details, and any other information shared while using our contact forms or subscribing to our services.
          </p>
          <p>
            Additionally, we automatically collect usage data such as IP addresses, browser type, pages visited, and time spent on our site to help us improve user experience.
          </p>
        </section>

        <section className="privacy-section fade-in">
          <h2 className="privacy-heading">3. How We Use Your Information</h2>
          <p>The information we collect is used to:</p>
          <ul className="privacy-list">
            <li>Provide and manage our services</li>
            <li>Communicate with you regarding updates and support</li>
            <li>Improve website functionality and customer experience</li>
            <li>Send promotional content and service-related information (with your consent)</li>
          </ul>
        </section>

        <section className="privacy-section fade-in">
          <h2 className="privacy-heading">4. Information Sharing</h2>
          <p>We do not sell or rent your personal data to third parties.</p>
        </section>

        <section className="privacy-section fade-in">
          <h2 className="privacy-heading">5. Data Security</h2>
          <p>
            We implement industry-standard measures to protect your personal data from unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section className="privacy-section fade-in">
          <h2 className="privacy-heading">6. Your Rights</h2>
          <p>
            You have the right to access, modify, or delete your personal information. If you would like to request a data update or removal, please contact us at{' '}
            <a href="mailto:info@aanyasolutions.net">info@aanyasolutions.net</a>.
          </p>
        </section>

        <section className="privacy-section fade-in">
          <h2 className="privacy-heading">7. Changes to This Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy at any time. Any changes will be reflected on this page with an updated revision date.
          </p>
        </section>

        <section className="privacy-section fade-in">
          <h2 className="privacy-heading">8. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, feel free to reach out to us at:
            <br />
            <strong>Email:</strong> <a href="mailto:info@aanyasolutions.net">info@aanyasolutions.net</a>
          </p>
        </section>
      </div>

      <Whatsapp />
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
