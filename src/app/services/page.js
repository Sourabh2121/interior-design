import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Shared/PageHeader';
import ServicesSection from '../../components/Home/ServicesSection';
import ServicesDetails from '../../components/Services/ServicesDetails';
import WhyChooseUs from '../../components/Home/WhyChooseUs';
import ContactSection from '../../components/Home/ContactSection';
import Footer from '../../components/Footer/Footer';

export const metadata = {
  title: 'Services & Turnkey Expertise | CS India',
  description: 'Explore CS India’s comprehensive interior architecture and turnkey design-and-build services for corporate offices, luxury residences, and commercial spaces across India.',
  keywords: 'CS India services, turnkey interior fitouts, corporate office interior India, modular furniture design, luxury residence architects',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Our Architectural Expertise"
          subtitle="Comprehensive interior design and turnkey build solutions engineered by CS India."
          bgImage="/cs-india/2602%20D1.png"
        />
        <ServicesSection />
        <ServicesDetails />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
