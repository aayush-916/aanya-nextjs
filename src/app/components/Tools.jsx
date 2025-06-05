'use client';

import React, { useState } from "react";
import "./Tools.css";
import { motion } from "framer-motion";
function Tools() {
  const [web, setweb] = useState(true);
  const [app, setapp] = useState(false);
  const [db, setdb] = useState(false);
  const [tools, settools] = useState(false);

  const click = (ch) => {
    setweb(false);
    setapp(false);
    setdb(false);
    settools(false);

    if (ch === "web") setweb(true);
    else if (ch === "app") setapp(true);
    else if (ch === "db") setdb(true);
    else if (ch === "tools") settools(true);
  };
  return (
    <motion.div
      className="container3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text">
        <h2>Tools & Technology</h2>
        <p>
          New tools and technologies are emerging as part of ongoing
          technological development, and organizations may take advantage of
          them with relative ease thanks to increasingly available cloud-based
          solutions.
        </p>
      </div>
      <div className="nav3">
        <div className={`web ${web ? "cli" : ""}`} onClick={() => click("web")}>
          Web
        </div>
        <div className={`app ${app ? "cli" : ""}`} onClick={() => click("app")}>
          Apps
        </div>
        <div className={`db ${db ? "cli" : ""}`} onClick={() => click("db")}>
          DB/Server
        </div>
        <div
          className={`tools ${tools ? "cli" : ""}`}
          onClick={() => click("tools")}
        >
          Tools
        </div>
      </div>

      <section id="skills" className={`skills-section hid ${web ? "dis" : ""}`}>
        <div className="skills-grid">
          <div className="skill-item">
            <img
              src="/web/React-JS.png"
              className="skill-icon"
              alt="React JS"
            />
            <span className="skill-name">React JS</span>
          </div>
          <div className="skill-item">
            <img
              src="/web/wordpress.png"
              className="skill-icon"
              alt="WordPress"
            />
            <span className="skill-name">WordPress</span>
          </div>
          <div className="skill-item">
            <img src="/web/shopify.png" className="skill-icon" alt="Shopify" />
            <span className="skill-name">Shopify</span>
          </div>
          <div className="skill-item">
            <img src="/web/Php.png" className="skill-icon" alt="PHP" />
            <span className="skill-name">PHP</span>
          </div>
          <div className="skill-item">
            <img src="/web/Python.png" className="skill-icon" alt="Python" />
            <span className="skill-name">Python</span>
          </div>
          <div className="skill-item">
            <img src="/web/HTML.png" className="skill-icon" alt="HTML" />
            <span className="skill-name">HTML</span>
          </div>
          <div className="skill-item">
            <img src="/web/CSS.png" className="skill-icon" alt="CSS" />
            <span className="skill-name">CSS</span>
          </div>
          <div className="skill-item">
            <img
              src="/web/Java-Script.png"
              className="skill-icon"
              alt="JavaScript"
            />
            <span className="skill-name">JavaScript</span>
          </div>
          <div className="skill-item">
            <img src="/web/Node-JS.png" className="skill-icon" alt="Node JS" />
            <span className="skill-name">Node JS</span>
          </div>
          <div className="skill-item">
            <img src="/web/Next-JS.png" className="skill-icon" alt="Next JS" />
            <span className="skill-name">Next JS</span>
          </div>
          <div className="skill-item">
            <img src="/web/Vue-JS.png" className="skill-icon" alt="Vue JS" />
            <span className="skill-name">Vue JS</span>
          </div>
          <div className="skill-item">
            <img
              src="/web/Bootstrap.png"
              className="skill-icon"
              alt="Bootstrap"
            />
            <span className="skill-name">Bootstrap</span>
          </div>
          <div className="skill-item">
            <img src="/web/JQuery.png" className="skill-icon" alt="JQuery" />
            <span className="skill-name">JQuery</span>
          </div>
          <div className="skill-item">
            <img src="/web/woo.png" className="skill-icon" alt="WooCommerce" />
            <span className="skill-name">WooCommerce</span>
          </div>
        </div>
      </section>

      <section id="skills" className={`skills-section hid ${app ? "dis" : ""}`}>
  <div className="skills-grid">
    <div className="skill-item">
      <img src="/app/Android-Native.png" className="skill-icon" alt="Android Native" />
      <span className="skill-name">Android</span>
    </div>
    <div className="skill-item">
      <img src="/app/React-JS.png" className="skill-icon" alt="React Native" />
      <span className="skill-name">React Native</span>
    </div>
    <div className="skill-item">
      <img src="/app/Kotlin.png" className="skill-icon" alt="Kotlin" />
      <span className="skill-name">Kotlin</span>
    </div>
  </div>
</section>


<section id="skills" className={`skills-section hid ${db ? "dis" : ""}`}>
  <div className="skills-grid">
    <div className="skill-item">
      <img src="/db/AWS.png" className="skill-icon" alt="AWS" />
      <span className="skill-name">AWS</span>
    </div>
    <div className="skill-item">
      <img src="/db/Azure.png" className="skill-icon" alt="Azure" />
      <span className="skill-name">Azure</span>
    </div>
    <div className="skill-item">
      <img src="/db/My-SQL.png" className="skill-icon" alt="MySQL" />
      <span className="skill-name">MySQL</span>
    </div>
    <div className="skill-item">
      <img src="/db/Mongo-DB.png" className="skill-icon" alt="MongoDB" />
      <span className="skill-name">MongoDB</span>
    </div>
    <div className="skill-item">
      <img src="/db/Firebase.png" className="skill-icon" alt="Firebase" />
      <span className="skill-name">Firebase</span>
    </div>
    <div className="skill-item">
      <img src="/db/SQL.png" className="skill-icon" alt="SQL" />
      <span className="skill-name">SQL</span>
    </div>
    <div className="skill-item">
      <img src="/db/Nginx-server.png" className="skill-icon" alt="Nginx" />
      <span className="skill-name">Nginx</span>
    </div>
    <div className="skill-item">
      <img src="/db/VPS.png" className="skill-icon" alt="VPS" />
      <span className="skill-name">VPS</span>
    </div>
  </div>
</section>


<section
  id="skills"
  className={`skills-section hid ${tools ? "dis" : ""}`}
>
  <div className="skills-grid">
    <div className="skill-item">
      <img src="/tools/Visual-code.png" className="skill-icon" alt="Visual Studio Code" />
      <span className="skill-name">Visual Studio Code</span>
    </div>
    <div className="skill-item">
      <img src="/tools/XAMP.png" className="skill-icon" alt="XAMPP" />
      <span className="skill-name">XAMPP</span>
    </div>
    <div className="skill-item">
      <img src="/tools/Adobe-Illustrator.png" className="skill-icon" alt="Adobe Illustrator" />
      <span className="skill-name">Adobe Illustrator</span>
    </div>
    <div className="skill-item">
      <img src="/tools/Github.png" className="skill-icon" alt="GitHub" />
      <span className="skill-name">GitHub</span>
    </div>
    <div className="skill-item">
      <img src="/tools/Photoshop.png" className="skill-icon" alt="Photoshop" />
      <span className="skill-name">Photoshop</span>
    </div>
    <div className="skill-item">
      <img src="/tools/Adobe-XD.png" className="skill-icon" alt="Adobe XD" />
      <span className="skill-name">Adobe XD</span>
    </div>
  </div>
</section>

    </motion.div>
  );
}

export default Tools;
