'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  Puzzle,
  SlidersHorizontal,
  Image,
  BadgeCheck,
  Settings,
  Handshake,
} from "lucide-react";

const features = [
  {
    title: "Integrated Solutions",
    description:
      "We provide a seamless blend of back office, inventory, graphic, and website services, all under one roof.",
    icon: <Puzzle size={40} className="icon2 blue" />,
  },
  {
    title: "Tailored Support",
    description:
      "We customize our services to meet your specific business needs and goals.",
    icon: <SlidersHorizontal size={40} className="icon2 purple" />,
  },
  {
    title: "Impactful Design",
    description:
      "We create compelling visuals and websites that elevate your brand and engage your audience.",
    icon: <Image size={40} className="icon2 pink" />,
  },
  {
    title: "Comprehensive Expertise",
    description:
      "Our team offers deep knowledge across all service areas, ensuring high-quality results.",
    icon: <BadgeCheck size={40} className="icon2 green" />,
  },
  {
    title: "Streamlined Operations",
    description:
      "We optimize your back office and inventory, freeing you to focus on growth.",
    icon: <Settings size={40} className="icon2 orange" />,
  },
  {
    title: "Strategic Partnership",
    description:
      "We're committed to your success, providing end-to-end solutions and reliable support.",
    icon: <Handshake size={40} className="icon2 red" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="why-choose-container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              className="feature-card"
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              {feature.icon}
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
