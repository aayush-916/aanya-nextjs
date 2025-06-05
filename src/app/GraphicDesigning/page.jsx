'use client';


import Image from 'next/image';
import '../components/ServicesPage/GraphicDesigning.css';
import { FaPaintBrush, FaChartPie, FaMobileAlt } from 'react-icons/fa';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';

const GraphicDesigning = () => {
  return (
    <>

      <Nav />

      <div className="graphic-container">
        <h1 className="graphic-title">Creative Graphic Designing Solutions</h1>

        <Image
          src="/graphics.jpg"
          alt="Graphic Designing"
          width={400}
          height={400}
          className="graphic-image"
        />

        <p className="graphic-text">
          In today's visually-driven world, design serves as the bridge connecting brands with their audience. At Aanya Solutions, we craft design experiences that are not only aesthetically pleasing but also deeply engaging and strategically aligned with your business goals. Our approach blends creative artistry with technical expertise and strategic thinking to translate complex ideas into clear, resonant visuals that foster brand loyalty, drive meaningful user engagement, and contribute to your overall success.
        </p>

        <h2 className="graphic-subtitle">Our Key Services</h2>

        <div className="graphic-features">
          <div className="feature-box">
            <FaPaintBrush className="feature-icon paintbrush-icon" />
            <h3 className="feature-title">Brand Identity Design</h3>
            <p className="feature-text">
              We specialize in creating compelling logos and marketing materials that elevate your brand identity. Our creative team ensures that your brand stands out with visually stunning designs that leave a lasting impression.
            </p>
          </div>

          <div className="feature-box">
            <FaChartPie className="feature-icon chart-icon" />
            <h3 className="feature-title">Infographic Design</h3>
            <p className="feature-text">
              Unlock the power of your data with insightful infographics. We create compelling visual stories that simplify complex information and captivate your audience, transforming your data into a powerful communication tool.
            </p>
          </div>

          <div className="feature-box">
            <FaMobileAlt className="feature-icon mobile-icon" />
            <h3 className="feature-title">Social Media Graphics</h3>
            <p className="feature-text">
              Visuals are pivotal to social media success. We meticulously design strategic graphics that not only capture attention but also eloquently tell your brand’s unique story, transforming your social channels into dynamic, interactive spaces for genuine connection and meaningful conversion.
            </p>
          </div>
        </div>
      </div>

      <Whatsapp />
      <Footer />
    </>
  );
};

export default GraphicDesigning;
