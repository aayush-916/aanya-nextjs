import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Services from '../components/Services';
import Whatsapp from '../components/Whatsapp';

export const metadata = {
  title: 'Our Services | Back Office, Inventory Management & Data Entry - Aanya Solutions',
  description: 'Explore our professional services including back office work, inventory management, data entry, and report creation. Aanya Solutions delivers cost-effective support from India to businesses in the USA.',
  keywords: 'back office services, inventory management company in India, data entry outsourcing, report creation services, low cost back office support, Aanya Solutions',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.aanyasolutions.com/services',
  },
};


const ServicesPage = () => {

  return (
    <>

      <Nav />
      <Whatsapp />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default ServicesPage;
