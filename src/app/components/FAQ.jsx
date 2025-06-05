'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FAQ.css";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What services does Aanya Solutions offer?",
    answer: "Aanya Solutions offers services including Back Office Management, Inventory Management, Graphic Designing, Website Designing, Software Development, and Website Optimization.",
  },
  {
    question: "Where is Aanya Solutions based?",
    answer: "We are based in India and serve clients worldwide, especially businesses in the United States.",
  },
  {
    question: "How can your back office services help my US-based business?",
    answer: "Our back office solutions streamline Inventory Management and Data Entry tasks, reduce overhead costs, and improve operational efficiency, allowing you to focus on strategic growth.",
  },
  {
    question: "Do you provide custom software development?",
    answer: "Yes, we develop tailor-made software solutions that meet your specific business needs and goals.",
  },
  {
    question: "Is Aanya Solutions experienced in handling US clients?",
    answer: "Absolutely. We are working with US-based businesses and understand their operational expectations and time zones.",
  },
  {
    question: "Can I get a free consultation?",
    answer: "Yes. We offer a free consultation to discuss your requirements and how our services can help.",
  },
  {
    question: "Do you work with specific retail software platforms?",
    answer: "Yes, Aanya Solutions specializes in Retail Vantage designed by profit system software. We provide Report support and custom Reports tailored to businesses need.",
  },
  {
    question: "Do you handle SEO for US markets?",
    answer: "Yes, we specialize in SEO optimized for the US market to help your business grow online and increase visibility.",
  },
  {
    question: "How secure is my data with Aanya Solutions?",
    answer: "We follow industry-standard security practices to protect your data and ensure complete confidentiality.",
  },

  {
    question: "How do I get started with your services?",
    answer: "You can fill out the contact form on our website or email us at info@aanyasolutions.com to get started.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      className="faq-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((item, index) => (
          <div key={index} className="faq-card">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{item.question}</span>
              <FaChevronDown className={`faq-icon ${activeIndex === index ? "rotate" : ""}`} />
            </button>
            <div
              className={`faq-answer ${activeIndex === index ? "open" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default FAQ;
