import React from 'react';

const Client = () => {
  return (
    <section className="clients-love-section">
      <h2 className="clients-love-title">Why Our Clients Love Aanya Solutions</h2>
      <div className="clients-love-container">
        <div className="clients-love-image-container">
          <img src="/people.png" alt="Happy Clients" className="clients-love-image" />
        </div>
        <div className="clients-love-content">
          
          <p className="clients-love-text">
            At Aanya Solutions, our clients value us not just for the services we offer, but for the way we deliver them. From streamlining back office operations to designing impactful websites and managing inventory effectively — we offer a complete package that saves time and drives business growth.
          </p>
          <p className="clients-love-text">
            What truly sets us apart is our focus on building relationships. We take the time to understand each client’s specific goals and provide tailored solutions that actually work. Whether you're launching a new brand or optimizing an existing operation, our team ensures every step is smooth, timely, and aligned with your vision.
          </p>
          <p className="clients-love-text">
            Clients love our creative approach to design, our organized project execution, and our transparent communication. We're responsive, reliable, and always committed to helping businesses grow. When you work with Aanya Solutions, you're choosing a partner who cares about your success as much as you do.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Client;
