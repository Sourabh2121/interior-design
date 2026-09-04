import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Shared/PageHeader';
import FeaturedProjects from '../../components/Home/FeaturedProjects';
import VideoShowcase from '../../components/Home/VideoShowcase';
import Footer from '../../components/Footer/Footer';

export const metadata = {
  title: 'Our Projects | Flipspace',
  description: 'View our portfolio of premium commercial interior designs.',
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Featured Case Studies"
          subtitle="Explore our portfolio of luxurious and functional workspaces designed across the globe."
          bgImage="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80"
        />
        <VideoShowcase />
        <FeaturedProjects />
      </main>
      <Footer />
    </>
  );
}
