import React from 'react';
import './Whatsapp.css';

function Whatsapp() {
  return (
    <>
      {/* Email Icon */}
      <div className="fixed-bottom-right2">
        <a
          href="mailto:sunilgupta@aanyasolutions.net"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
          title="Send us an Email"
        >
          <img
            src="/Email_icon.png"
            alt="Send Email to Aanya Solutions"
            className="whatsapp-icon"
          />
        </a>
      </div>

      {/* WhatsApp / Call Icon */}
      <div className="fixed-bottom-right">
        <a
          href="https://wa.me/918368859076"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
          title="Chat with us on WhatsApp"
        >
          <img
            src="/call_logo.webp"
            alt="Chat on WhatsApp"
            className="whatsapp-icon ic2"
          />
        </a>
      </div>
    </>
  );
}

export default Whatsapp;
