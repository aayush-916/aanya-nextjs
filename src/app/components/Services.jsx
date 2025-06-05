"use client";

import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Boxes,
  Palette,
  Layout,
  Code2,
  GaugeCircle,
} from "lucide-react";

// Animation variant for cards
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
    },
  }),
};

function Services() {
  return (
    <motion.div
      className="service-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1 }}
      id="services"
    >
      <h2 id="service" className="service-heading">
        Our <span>Services</span>
      </h2>
      <p className="service-description">
        We provide tailored business solutions such as back office and inventory management, compelling digital designs, scalable websites, and robust software tailored to your business goals.
      </p>

      <div className="service-grid">
        {[
          {
            href: "/BackOfficeDetail",
            icon: <FileText size={48} className="mx-auto text-blue-600 mb-4" />,
            ballClass: "rotating-ball",
            title: "Back Office Management",
            desc:
              "We handle your Data Entry and back office tasks, so you can focus on growing your business efficiently.",
          },
          {
            href: "/InventoryManagement",
            icon: <Boxes size={48} className="mx-auto text-orange-600 mb-4" />,
            ballClass: "rotating-ball2",
            title: "Inventory Management",
            desc:
              "Optimize stock levels, eliminate errors, and improve operational efficiency with our smart inventory solutions.",
          },
          {
            href: "/GraphicDesigning",
            icon: <Palette size={48} className="mx-auto text-pink-600 mb-4" />,
            ballClass: "rotating-ball3",
            title: "Graphic Designing",
            desc:
              "We create eye-catching visuals and branding that captivate your audience and communicate your vision clearly.",
          },
          {
            href: "/WebsiteDesigning",
            icon: <Layout size={48} className="mx-auto text-green-600 mb-4" />,
            ballClass: "rotating-ball",
            title: "Website Designing",
            desc:
              "Beautiful, responsive, and intuitive website designs that help you stand out online and convert more visitors.",
          },
          {
            href: "/SoftwareDevelopment",
            icon: <Code2 size={48} className="mx-auto text-purple-600 mb-4" />,
            ballClass: "rotating-ball2",
            title: "Software Development",
            desc:
              "From planning to deployment, we build efficient, scalable, and secure software tailored for your operations.",
          },
          {
            href: "/WebsiteOptimisation",
            icon: (
              <GaugeCircle size={48} className="mx-auto text-red-600 mb-4" />
            ),
            ballClass: "rotating-ball3",
            title: "Website Optimisation",
            desc:
              "Improve speed, SEO, performance, and user experience with our result-driven website optimization strategies.",
          },
        ].map((item, index) => (
          <Link href={item.href} key={index}>
            <motion.div
              className="service-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              <div className="icon-container">
                <div className="icon">{item.icon}</div>
                <div className={item.ballClass}></div>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-text">{item.desc}</p>
                <button className="button-87">Discover More ➜</button>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default Services;
