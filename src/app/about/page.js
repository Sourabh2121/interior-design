import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Shared/PageHeader';
import AboutSection from '../../components/Home/AboutSection';
import VisionMission from '../../components/Home/VisionMission';
import Footer from '../../components/Footer/Footer';

export const metadata = {
  title: 'About Us | Flipspace',
  description: 'Learn about our vision, mission, and who we are.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="About Our Agency"
          subtitle="Redefining commercial interiors with over a decade of luxury design experience."
          bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
        />
        <AboutSection />
        <VisionMission />
      </main>
      <Footer />
    </>
  );
}
