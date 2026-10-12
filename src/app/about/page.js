import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Shared/PageHeader';
import AboutSection from '../../components/Home/AboutSection';
import AboutDetails from '../../components/About/AboutDetails';
import VisionMission from '../../components/Home/VisionMission';
import ContactSection from '../../components/Home/ContactSection';
import Footer from '../../components/Footer/Footer';

export const metadata = {
  title: 'About CS India | Luxury Interior Architecture & Turnkey Studio',
  description: 'Discover the story, vision, and architectural mastery of CS India. Delivering over a decade of luxury commercial and residential design excellence across India.',
  keywords: 'About CS India, CS India founders, interior architecture firm, turnkey interior designers Mumbai, Bengaluru, Delhi NCR',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="About CS India"
          subtitle="Redefining luxury interiors and turnkey commercial architecture across India for over a decade."
          bgImage="/cs-india/FINAL1.RGB_color.jpg"
        />
        <AboutSection />
        <AboutDetails />
        <VisionMission />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
