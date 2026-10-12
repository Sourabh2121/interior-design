import Navbar from '../../components/Navbar/Navbar';
import PageHeader from '../../components/Shared/PageHeader';
import ContactSection from '../../components/Home/ContactSection';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCube, FaVrCardboard, FaChartLine, FaDraftingCompass, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Technology & Innovation | CS India',
  description: 'Discover the proprietary architectural technology, 3D BIM modeling, and digital site management systems powering CS India turnkey projects.',
  keywords: 'CS India technology, architectural BIM, VR design walkthrough, smart interior technology India',
};

export default function TechnologyPage() {
  const techFeatures = [
    {
      icon: <FaVrCardboard size={36} />,
      title: 'Virtual Reality (VR) Immersion',
      desc: 'Step into your commercial or residential space before a single brick is laid. CS India’s immersive VR headsets allow stakeholders to experience lighting, acoustics, and sightlines with hyper-realistic fidelity.'
    },
    {
      icon: <FaCube size={36} />,
      title: 'Building Information Modeling (BIM)',
      desc: 'Clash detection and parametric 3D coordinate modeling ensure HVAC ducting, plumbing lines, electrical trays, and structural columns integrate without costly on-site disputes or rework.'
    },
    {
      icon: <FaChartLine size={36} />,
      title: 'Cloud-Based Project Tracking',
      desc: 'Clients receive access to CS India’s real-time digital dashboard. Monitor daily progress photos, milestone Gantt charts, procurement status, and BOQ burn-rates with complete transparency.'
    },
    {
      icon: <FaMobileAlt size={36} />,
      title: 'Smart IoT Building Integration',
      desc: 'Smart workspace automation with sensor-based daylight harvesting, automated HVAC zoning, presence detectors, and app-based conference room scheduling to drive down energy operational costs.'
    },
    {
      icon: <FaDraftingCompass size={36} />,
      title: 'Precision CNC Automated Joinery',
      desc: 'Direct-from-CAD to automated German CNC production. Every panel, acoustic baffle, and veneer surface is milled with sub-millimeter tolerances for a flawless fit.'
    },
    {
      icon: <FaShieldAlt size={36} />,
      title: 'Predictive Quality Assurance',
      desc: 'Systematic digital quality checks covering 150+ audit checkpoints. Ensures zero structural snags, perfect paint consistency, and acoustic isolation across all zones.'
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Proprietary Technology"
          subtitle="How CS India leverages digital twin modeling, BIM, and automated fabrication for flawless execution."
          bgImage="/cs-india/2602%20D3.png"
        />

        <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
          <Container className="py-4">
            <div className="text-center pb-5">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="section-label-line"></div>
                <h6 className="text-uppercase mb-0 font-sans section-label-text">
                  Digital Engineering
                </h6>
                <div className="section-label-line section-label-line--right"></div>
              </div>
              <h2 className="display-4 font-cinzel text-dark mb-3">
                Technology at <span className="font-serif text-logo-accent font-italic accent-italic">CS India</span>
              </h2>
              <p className="text-muted font-sans mx-auto" style={{ maxWidth: '650px', fontSize: '1.05rem', lineHeight: 1.7 }}>
                By pairing world-class design sensibility with advanced construction technology, CS India eliminates guesswork, guarantees budget fidelity, and accelerates delivery timelines.
              </p>
            </div>

            <Row className="g-4">
              {techFeatures.map((item, idx) => (
                <Col md={6} lg={4} key={idx}>
                  <div className="p-4 p-lg-5 bg-white rounded-4 shadow-sm border h-100 transition-all hover-lift">
                    <div className="p-3 d-inline-block rounded-3 mb-4" style={{ backgroundColor: 'rgba(3, 169, 244, 0.1)', color: 'var(--cs-lightblue)' }}>
                      {item.icon}
                    </div>
                    <h4 className="font-cinzel text-dark mb-3" style={{ fontSize: '1.25rem' }}>{item.title}</h4>
                    <p className="font-sans text-muted mb-0 small" style={{ lineHeight: 1.8 }}>
                      {item.desc}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* BIM & Process Highlight */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <Container className="py-4">
            <Row className="align-items-center g-5">
              <Col lg={6}>
                <div className="rounded-4 overflow-hidden shadow-lg position-relative" style={{ height: '420px' }}>
                  <img
                    src="/cs-india/BTIZ6676.JPG"
                    alt="CS India Digital Modeling"
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <h3 className="display-5 font-cinzel text-dark mb-3">
                  Zero Delay. Zero Re-Work. <br />
                  <span className="font-serif text-logo-accent font-italic accent-italic">The Digital Twin Advantage</span>
                </h3>
                <p className="text-muted font-sans mb-4" style={{ lineHeight: 1.8 }}>
                  Traditional interior fit-outs in India frequently suffer from unexpected MEP clashes, material delays, and cost overruns. At CS India, our proprietary technology pipeline ensures that your space is fully simulated, tested, and resolved digitally before on-site execution begins.
                </p>
                <div className="d-flex flex-column gap-3 font-sans small text-dark">
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-dark px-2 py-1">1</span>
                    <span>100% collision-free 3D coordinate modeling across all MEP disciplines.</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-dark px-2 py-1">2</span>
                    <span>Exact quantity take-offs guaranteeing fixed and transparent BOQs.</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-dark px-2 py-1">3</span>
                    <span>Direct integration with our automated modular furniture manufacturing plants.</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
