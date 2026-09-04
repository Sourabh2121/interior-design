import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import VisionMission from '../components/Home/VisionMission';
import ServicesSection from '../components/Home/ServicesSection';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import VideoShowcase from '../components/Home/VideoShowcase';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionMission />
        <ServicesSection />
        <WhyChooseUs />
        <VideoShowcase />
        <FeaturedProjects />
      </main>
      <Footer />
    </>
  );
}
