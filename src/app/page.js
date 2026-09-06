import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import ProcessSection from '../components/Home/ProcessSection';
import VisionMission from '../components/Home/VisionMission';
import ServicesSection from '../components/Home/ServicesSection';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import RecentWorks from '../components/Home/RecentWorks';
import VideoShowcase from '../components/Home/VideoShowcase';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import TestimonialSection from '../components/Home/TestimonialSection';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <VisionMission />
        <ServicesSection />
        <FeaturedProjects />
        <TestimonialSection />
        <WhyChooseUs />
        <RecentWorks />
        <VideoShowcase />
      </main>
      <Footer />
    </>
  );
}
