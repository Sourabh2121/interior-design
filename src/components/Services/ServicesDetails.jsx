'use client';
import { useState } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaBuilding, FaTools, FaHome, FaStore, FaGlassCheers, FaCouch, 
  FaCheck, FaProjectDiagram, FaFileContract, FaDraftingCompass, FaHardHat, FaKey 
} from 'react-icons/fa';

export default function ServicesDetails() {
  const [activeTab, setActiveTab] = useState(0);

  const comprehensiveServices = [
    {
      id: 0,
      title: 'Corporate & Tech Workspaces',
      tagline: 'High-performance agile offices tailored to modern enterprise cultures.',
      icon: <FaBuilding size={32} />,
      img: '/cs-india/2602%20D1.png',
      features: [
        'Acoustically isolated conference rooms and soundproof phone booths',
        'Ergonomic workstation clusters with height-adjustable smart desks',
        'Biophilic design integration with natural living walls and circadian lighting',
        'Town hall areas, collaborative breakout lounges, and cafeteria design',
        'State-of-the-art AV integration, access control, and IoT climate automation'
      ],
      idealFor: 'IT Companies, FinTech HQs, Global Capability Centers (GCCs), Consulting Firms'
    },
    {
      id: 1,
      title: 'Turnkey Design & Build (EPC)',
      tagline: 'Single-window contract from bare-shell structure to ready-to-move-in handover.',
      icon: <FaTools size={32} />,
      img: '/cs-india/IMG-0106.PNG',
      features: [
        'End-to-end civil demolition, dry-wall partitions, and flooring works',
        'Complete MEP engineering: HVAC ducting, electrical sub-stations, and firefighting systems',
        'Local municipal, fire safety, and environmental statutory approvals handled',
        'Strict milestone-based budgeting with 0% surprise cost escalation',
        'Comprehensive 10-year structural and joinery warranty support'
      ],
      idealFor: 'Enterprises wanting zero execution headache and a single accountable partner'
    },
    {
      id: 2,
      title: 'Ultra-Luxury Residential',
      tagline: 'Bespoke penthouses, seaside apartments, and private ancestral villas.',
      icon: <FaHome size={32} />,
      img: '/cs-india/Parents%20Bedroom_01_4.jpg',
      features: [
        'Custom master suites with integrated walk-in closets and spa bathrooms',
        'Imported Italian marble sourcing, book-matching, and precision dry-laying',
        'Gourmet modular show kitchens with Miele/Gaggenau appliance integration',
        'Smart home automation (Control4/Lutron) for lighting, shades, and climate',
        'Curated art consulting, custom rugs, and bespoke European furnishings'
      ],
      idealFor: 'High-Net-Worth Individuals, Business Leaders, Luxury Penthouse Owners'
    },
    {
      id: 3,
      title: 'Commercial & Flagship Retail',
      tagline: 'Experiential showrooms that captivate consumers and elevate brand prestige.',
      icon: <FaStore size={32} />,
      img: '/cs-india/NI%20Master%20Bedroom%20option2_01.jpg',
      features: [
        'Scientifically analyzed customer flow journeys to maximize conversion',
        'Bespoke product display vitrines with magnetic track illumination',
        'Durable, high-traffic commercial flooring with anti-slip finishes',
        'Interactive digital display facades and experiential storytelling zones',
        'Turnkey national rollout capabilities across tier-1 and tier-2 Indian cities'
      ],
      idealFor: 'Luxury Fashion Houses, Jewelry Salons, Automobile Experience Centers'
    },
    {
      id: 4,
      title: 'Boutique Hospitality & Lounges',
      tagline: 'Memorable fine dining, executive lounges, and boutique hotel interiors.',
      icon: <FaGlassCheers size={32} />,
      img: '/cs-india/kitchen%20n_0022222_1.jpg',
      features: [
        'Atmospheric layered lighting design creating intimate mood transitions',
        'Commercial kitchen layout planning complying with FSSAI regulations',
        'Custom upholstered banquettes, bar counters with backlit onyx and brass',
        'Acoustically tuned dining environments preventing noise fatigue',
        'Lavish guest washrooms with bespoke vanity counters and premium fittings'
      ],
      idealFor: 'Fine Dining Restaurants, Rooftop Lounges, Executive Private Clubs'
    },
    {
      id: 5,
      title: 'Custom Modular Joinery & Furniture',
      tagline: 'In-house precision manufacturing with German hardware and premium veneers.',
      icon: <FaCouch size={32} />,
      img: '/cs-india/guest%20bedroom%2001.jpg',
      features: [
        'High-precision CNC automated panel processing ensuring millimeter accuracy',
        'Premium natural veneers, PU lacquer finishes, and metallic coatings',
        'Certified hardware from Blum, Hafele, and Hettich with lifetime guarantees',
        'Modular office workstations and executive desking engineered for ergonomics',
        'Custom acoustic wall paneling, ceiling baffles, and decorative partitions'
      ],
      idealFor: 'Bespoke fit-outs requiring tailor-made dimensions and finish consistency'
    }
  ];

  const turnkeyWorkflow = [
    { step: '01', title: 'Consultation & Audit', desc: 'Space audit, user journey mapping, and feasibility studies.', icon: <FaDraftingCompass /> },
    { step: '02', title: '3D BIM Visualization', desc: 'Photorealistic 3D renders, VR walk-throughs, and detailed MEP schematics.', icon: <FaProjectDiagram /> },
    { step: '03', title: 'Value Engineering', desc: 'Transparent Bill of Quantities (BOQ), material selections, and schedule freezing.', icon: <FaFileContract /> },
    { step: '04', title: 'Civil & MEP Execution', desc: 'Full-force on-site construction supervised by certified CS India engineers.', icon: <FaHardHat /> },
    { step: '05', title: '150-Point Quality Audit', desc: 'Rigorous snag identification, acoustic testing, and air-balance checks.', icon: <FaCheck /> },
    { step: '06', title: 'White-Glove Handover', desc: 'On-time delivery, compliance documents, and 5-year maintenance warranty.', icon: <FaKey /> }
  ];

  const faqs = [
    {
      q: 'What is CS India’s turnkey interior design model?',
      a: 'CS India provides a single-window contract where we assume complete responsibility for every stage: architectural design, 3D renders, material procurement, civil contracting, MEP engineering, modular joinery fabrication, and government compliances. You have a dedicated CS India Project Director and zero coordination hassle with third-party vendors.'
    },
    {
      q: 'How does CS India guarantee on-time completion?',
      a: 'We leverage proprietary digital Gantt scheduling and Building Information Modeling (BIM) to plan procurement and fabrication in parallel with civil works. Our contracts include defined completion dates with performance guarantees.'
    },
    {
      q: 'What sizes of commercial and residential spaces does CS India undertake?',
      a: 'For commercial and corporate workspaces, CS India manages spaces ranging from 3,000 sq ft to over 100,000+ sq ft across Mumbai, Bengaluru, Delhi NCR, and Hyderabad. For residential projects, we specialize in luxury residences, duplexes, and villas starting from 2,500 sq ft.'
    },
    {
      q: 'Does CS India manufacture its own modular furniture?',
      a: 'Yes. CS India operates advanced automated joinery facilities equipped with German CNC machinery. This enables us to ensure millimeter-accurate custom finishes, superior durability, and direct cost savings without middleman markups.'
    },
    {
      q: 'What warranty and post-handover support does CS India offer?',
      a: 'All CS India turnkey projects come with a comprehensive defect-liability warranty, along with ongoing maintenance support and dedicated customer success managers.'
    }
  ];

  return (
    <div className="services-details-wrapper">
      {/* Interactive Comprehensive Service Suite */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <Container className="py-4">
          <div className="text-center pb-5">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="section-label-line"></div>
              <h6 className="text-uppercase mb-0 font-sans section-label-text">
                Full-Spectrum Solutions
              </h6>
              <div className="section-label-line section-label-line--right"></div>
            </div>
            <h2 className="display-4 font-cinzel text-dark mb-3">
              Specialized Services by <span className="font-serif text-logo-accent font-italic accent-italic">CS India</span>
            </h2>
            <p className="text-muted font-sans mx-auto" style={{ maxWidth: '650px', fontSize: '1.05rem' }}>
              Explore how CS India delivers end-to-end excellence across diverse typologies and architectural scales.
            </p>
          </div>

          {/* Service Selector Tabs */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {comprehensiveServices.map((srv) => (
              <button
                key={srv.id}
                onClick={() => setActiveTab(srv.id)}
                className={`btn font-sans px-4 py-2 rounded-0 text-uppercase small ${
                  activeTab === srv.id
                    ? 'btn-dark text-white fw-bold shadow'
                    : 'btn-outline-secondary text-dark'
                }`}
                style={{
                  letterSpacing: '0.05em',
                  borderColor: activeTab === srv.id ? '#121212' : '#dee2e6'
                }}
              >
                {srv.title}
              </button>
            ))}
          </div>

          {/* Active Service Showcase */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 p-lg-5 rounded-4 bg-light border shadow-sm"
          >
            <Row className="align-items-center g-5">
              <Col lg={6}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-3 rounded-circle bg-white text-primary shadow-sm" style={{ color: 'var(--cs-lightblue) !important' }}>
                    {comprehensiveServices[activeTab].icon}
                  </div>
                  <div>
                    <h3 className="font-cinzel text-dark mb-1">{comprehensiveServices[activeTab].title}</h3>
                    <p className="font-sans text-muted mb-0 small">{comprehensiveServices[activeTab].tagline}</p>
                  </div>
                </div>

                <div className="my-4">
                  <h6 className="font-sans text-uppercase text-dark fw-bold mb-3 small" style={{ letterSpacing: '0.1em' }}>
                    Key Deliverables & Capabilities:
                  </h6>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    {comprehensiveServices[activeTab].features.map((feat, i) => (
                      <li key={i} className="d-flex align-items-start gap-2 font-sans text-dark small" style={{ lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--cs-lightblue)' }} className="mt-1">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-white rounded-3 border mt-4">
                  <small className="text-muted font-sans d-block mb-1 text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>
                    Ideal For:
                  </small>
                  <p className="font-sans text-dark mb-0 small fw-medium">
                    {comprehensiveServices[activeTab].idealFor}
                  </p>
                </div>
              </Col>

              <Col lg={6}>
                <div className="rounded-4 overflow-hidden shadow-lg position-relative" style={{ height: '420px' }}>
                  <img
                    src={comprehensiveServices[activeTab].img}
                    alt={comprehensiveServices[activeTab].title}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white card-gradient-overlay">
                    <span className="badge bg-info text-dark mb-2 px-3 py-1 text-uppercase fw-bold">CS India Standard</span>
                    <h5 className="font-cinzel mb-0">{comprehensiveServices[activeTab].title}</h5>
                  </div>
                </div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* 6-Stage Delivery Protocol */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container className="py-4">
          <div className="text-center pb-5">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="section-label-line"></div>
              <h6 className="text-uppercase mb-0 font-sans section-label-text">
                Delivery Methodology
              </h6>
              <div className="section-label-line section-label-line--right"></div>
            </div>
            <h2 className="display-4 font-cinzel text-dark mb-3">
              The CS India Turnkey <span className="font-serif text-logo-accent font-italic accent-italic">Protocol</span>
            </h2>
            <p className="text-muted font-sans mx-auto" style={{ maxWidth: '650px' }}>
              From initial sketch to key handover, our systematic engineering framework ensures complete transparency, cost discipline, and speed.
            </p>
          </div>

          <Row className="g-4">
            {turnkeyWorkflow.map((wf, idx) => (
              <Col md={6} lg={4} key={idx}>
                <div className="p-4 bg-white rounded-4 shadow-sm border h-100 position-relative">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="font-cinzel fw-bold display-6" style={{ color: 'var(--cs-lightblue)' }}>
                      {wf.step}
                    </span>
                    <div className="p-2 rounded-circle bg-light text-dark">
                      {wf.icon}
                    </div>
                  </div>
                  <h5 className="font-cinzel text-dark mb-2">{wf.title}</h5>
                  <p className="font-sans text-muted mb-0 small" style={{ lineHeight: 1.7 }}>
                    {wf.desc}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <Container className="py-4" style={{ maxWidth: '900px' }}>
          <div className="text-center pb-5">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="section-label-line"></div>
              <h6 className="text-uppercase mb-0 font-sans section-label-text">
                Frequently Asked
              </h6>
              <div className="section-label-line section-label-line--right"></div>
            </div>
            <h2 className="display-4 font-cinzel text-dark mb-3">
              Partnering With <span className="font-serif text-logo-accent font-italic accent-italic">CS India</span>
            </h2>
            <p className="text-muted font-sans">
              Common questions about our turnkey project models, timelines, and execution.
            </p>
          </div>

          <Accordion defaultActiveKey="0" className="shadow-sm">
            {faqs.map((faq, idx) => (
              <Accordion.Item eventKey={String(idx)} key={idx} className="border-0 mb-3 rounded-3 overflow-hidden border">
                <Accordion.Header className="font-cinzel">
                  <span className="fw-semibold text-dark">{faq.q}</span>
                </Accordion.Header>
                <Accordion.Body className="font-sans text-muted" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                  {faq.a}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>
    </div>
  );
}
