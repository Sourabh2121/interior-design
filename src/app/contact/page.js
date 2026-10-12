import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Shared/PageHeader';
import ContactSection from '../../components/Home/ContactSection';
import Footer from '../../components/Footer/Footer';

export const metadata = {
  title: 'Contact Us | CS India',
  description: 'Connect with CS India’s principal architects and turnkey project directors. Offices and studios in Mumbai BKC, Bengaluru Indiranagar, and Delhi NCR Gurugram.',
  keywords: 'Contact CS India, interior design studio Mumbai, turnkey architects Bangalore, CS India office address',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Contact CS India"
          subtitle="Connect with our principal architects and turnkey directors across India."
          bgImage="/cs-india/FINAL1.RGB_color.jpg"
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
