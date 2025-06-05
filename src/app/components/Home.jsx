'use client';

import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import Link from "next/link";
import styles from './Home.module.css';

function Home() {
  return (
    <div style={{ overflow: "visible" }}>
      <motion.div
        className={styles.main}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className={styles.tx}>
          <motion.h1
            id="tyw"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            We specialize in <br />
            <span className={styles.type}>
              <Typewriter
                words={[
                  "Back Office Management",
                  "Inventory Management",
                  "Graphic Designing",
                  "Website Designing",
                ]}
                loop={true}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={10}
                delaySpeed={1000}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Empowering Your Business with Smart Solutions
          </motion.p>

          <motion.article
            className={styles.longar}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            From streamlining daily operations to crafting standout digital experiences, we help businesses work smarter, look better, and grow faster. Let us handle the behind-the-scenes, so you can focus on what matters most.
          </motion.article>

          <motion.article
            className={styles.shortar}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            From streamlining daily operations to crafting standout digital experiences, we help businesses work smarter, look better, and grow faster. Let us handle the behind-the-scenes, so you can focus on what matters most.
          </motion.article>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <button className={styles["button-85"]}>Contact Us ➜</button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className={styles.gif}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src="./im2.gif" alt="Animation" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
