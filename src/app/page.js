
import Client from './components/Client'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'
import Services from './components/Services'
import Tools from './components/Tools'
import Whatsapp from './components/Whatsapp'
import WhyChooseUs from './components/WhyChooseUs'
import FAQ from './components/FAQ'
import BlogThree from './components/BlogThree'


export const metadata = {
  title: "Aanya Solutions | Back Office & Web Development in USA"
  ,
  description:
    "Aanya Solutions offers expert back office services, data entry, inventory management, and IT solutions including web and software development.",
  keywords:
    "Aanya Solutions, Back Office Services USA, Inventory Management Company India, Data Entry Services, Report Creation Services, Graphic Designing, Website Development, Software Development, Website Optimization, Remote Back Office Support, IT Solutions USA, Web Design USA, App Development USA, Custom Software USA, Digital Marketing Services USA, Professional IT Company",
  authors: [{ name: "Aanya Solutions" }],
};


export default function Root() {

  return (
    <>

      <Nav/>
      <Whatsapp/>
      <Home/>
      <Services/>
      <Tools/>
      <WhyChooseUs/>
      <Client/>
      <FAQ/>
      <BlogThree/>
      <Contact/>
      <Footer/>
    </>
  )
}

