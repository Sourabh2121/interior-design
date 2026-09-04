import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Shared/PageHeader';
import ServicesSection from '../../components/Home/ServicesSection';
import WhyChooseUs from '../../components/Home/WhyChooseUs';
import Footer from '../../components/Footer/Footer';

export const metadata = {
  title: 'Services & Expertise | Flipspace',
  description: 'Discover the services we offer and why you should choose us.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Our Expertise"
          subtitle="Comprehensive interior design and build solutions to transform your vision into reality."
          bgImage="https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&q=80"
        />
        <ServicesSection />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
