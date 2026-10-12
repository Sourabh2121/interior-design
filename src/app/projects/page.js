import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Shared/PageHeader';
import ProjectsGallery from '../../components/Projects/ProjectsGallery';
import VideoShowcase from '../../components/Home/VideoShowcase';
import ContactSection from '../../components/Home/ContactSection';
import Footer from '../../components/Footer/Footer';

export const metadata = {
  title: 'Our Projects & Portfolio | CS India',
  description: 'Explore the landmark portfolio of CS India. Premium commercial corporate headquarters, luxury residences, and hospitality spaces delivered on time across India.',
  keywords: 'CS India projects, interior architecture portfolio, commercial fitouts Mumbai, luxury penthouse design, Bangalore office interior',
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Landmark Projects"
          subtitle="Explore CS India's portfolio of luxurious, functional, and high-performance environments built across India."
          bgImage="/cs-india/FINAL2.jpg"
        />
        <ProjectsGallery />
        <VideoShowcase />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
