import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Services from '../components/Services';
import Whatsapp from '../components/Whatsapp';
import Head from 'next/head';

const ServicesPage = () => {

  return (
    <>
      <Head>
        <title>Our Services | Back Office, Inventory Management & Data Entry - Aanya Solutions</title>
        <meta
          name="description"
          content="Explore our professional services including back office work, inventory management, data entry, and report creation. Aanya Solutions delivers cost-effective support from India to businesses in the USA."
        />
        <meta
          name="keywords"
          content="back office services, inventory management company in India, data entry outsourcing, report creation services, low cost back office support, Aanya Solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.aanyasolutions.com/services" />
      </Head>

      <Nav />
      <Whatsapp />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default ServicesPage;
