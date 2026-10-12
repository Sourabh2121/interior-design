'use client';
import { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaRulerCombined, FaCalendarAlt, FaTimes, FaCheckCircle, FaBuilding } from 'react-icons/fa';

export default function ProjectsGallery() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Corporate Offices', 'Luxury Residences', 'Hospitality & Dining', 'Commercial Retail'];

  const projects = [
    {
      id: 1,
      title: 'CS India Sovereign Tower',
      category: 'Corporate Offices',
      location: 'Bandra Kurla Complex (BKC), Mumbai',
      area: '45,000 Sq. Ft.',
      year: '2024',
      scope: 'Complete Turnkey Design & Build, MEP, Custom Joinery',
      img: '/cs-india/FINAL2.jpg',
      desc: 'A state-of-the-art corporate headquarters designed for high-density collaboration. Features acoustic phone pods, double-height executive atrium, living biophilic walls, and automated circadian lighting.'
    },
    {
      id: 2,
      title: 'The Sky Villa Master Suite',
      category: 'Luxury Residences',
      location: 'Worli Sea Face, Mumbai',
      area: '6,500 Sq. Ft.',
      year: '2024',
      scope: 'Bespoke Luxury Architecture, Italian Marble, Home Automation',
      img: '/cs-india/MASTER%201.jpg',
      desc: 'An ultra-luxury seaside penthouse featuring book-matched Michelangelo marble, custom walnut cabinetry, automated sheer drapery, and a private master retreat overlooking the Arabian Sea.'
    },
    {
      id: 3,
      title: 'Zenith Tech Innovation Campus',
      category: 'Corporate Offices',
      location: 'Cyber City, Gurugram (Delhi NCR)',
      area: '82,000 Sq. Ft.',
      year: '2023',
      scope: 'Fast-Track Turnkey Fitout, Acoustic Engineering, Cafeteria',
      img: '/cs-india/2602%20D1.png',
      desc: 'An enterprise campus engineered for agile teams. Built with flexible modular pods, collaborative town halls, and smart energy management achieving IGBC Gold certification.'
    },
    {
      id: 4,
      title: 'Horizon Executive Hospitality Lounge',
      category: 'Hospitality & Dining',
      location: 'Indiranagar, Bengaluru',
      area: '12,000 Sq. Ft.',
      year: '2024',
      scope: 'Interior Architecture, Commercial Kitchen, Bespoke Bar Counter',
      img: '/cs-india/kitchen%20n_0022222_1.jpg',
      desc: 'An atmospheric fine-dining and executive lounge designed with layered ambient lighting, backlit honey onyx bar counters, acoustically tuned dining booths, and custom velvet seating.'
    },
    {
      id: 5,
      title: 'The Grand Manor Residence',
      category: 'Luxury Residences',
      location: 'Golf Links, New Delhi',
      area: '9,200 Sq. Ft.',
      year: '2023',
      scope: 'Full Villa Renovation, Custom Millwork, Heritage Restoration',
      img: '/cs-india/Livingroom_ni_1_1.jpg',
      desc: 'A timeless estate blending classic Indian architectural motifs with sleek European modernism. Features hand-carved teak paneling, double-glazed soundproof glass walls, and an artisanal courtyard.'
    },
    {
      id: 6,
      title: 'Aura Luxury Flagship Atelier',
      category: 'Commercial Retail',
      location: 'Colaba, Mumbai',
      area: '5,500 Sq. Ft.',
      year: '2024',
      scope: 'Experiential Retail Architecture, Lighting Design, Vitrines',
      img: '/cs-india/NI%20Master%20Bedroom%20option2_01.jpg',
      desc: 'A high-end retail boutique designed to immerse luxury shoppers. Equipped with magnetic track spotlights, brushed champagne brass display cases, and private VIP styling salons.'
    },
    {
      id: 7,
      title: 'Prestige Financial Hub',
      category: 'Corporate Offices',
      location: 'HITEC City, Hyderabad',
      area: '38,000 Sq. Ft.',
      year: '2023',
      scope: 'Turnkey Commercial Interior, Executive Boardrooms, BMS Integration',
      img: '/cs-india/IMG-0106.PNG',
      desc: 'A premier financial institution headquarters built with sound-dampened meeting rooms, fiber-optic ceiling features, and high-durability German modular workstations.'
    },
    {
      id: 8,
      title: 'The Glasshouse Modernist Villa',
      category: 'Luxury Residences',
      location: 'Koregaon Park, Pune',
      area: '7,400 Sq. Ft.',
      year: '2024',
      scope: 'Minimalist Interior Architecture, Kitchen Design, Smart Home',
      img: '/cs-india/Parents%20Bedroom_01_4.jpg',
      desc: 'A light-filled modernist villa celebrating concrete, fluted glass, and warm European oak. Seamlessly blends indoor living with private landscaped infinity pool decks.'
    },
    {
      id: 9,
      title: 'CS India Design Atelier & Hub',
      category: 'Commercial Retail',
      location: 'Bandra West, Mumbai',
      area: '8,000 Sq. Ft.',
      year: '2024',
      scope: 'In-House Material Library, Client VR Presentation Theater',
      img: '/cs-india/guest%20bedroom%2001.jpg',
      desc: 'CS India’s own multi-floor innovation studio, showcasing live material prototypes, custom acoustic ceiling treatments, and an interactive 3D VR simulation theater for clients.'
    },
    {
      id: 10,
      title: 'NexGen Cloud Collaboration Center',
      category: 'Corporate Offices',
      location: 'Outer Ring Road, Bengaluru',
      area: '52,000 Sq. Ft.',
      year: '2024',
      scope: 'Turnkey EPC Fitout, Wellness Lounges, Ergonomic Test Labs',
      img: '/cs-india/M1.jpg',
      desc: 'A flagship development for an international cloud infrastructure leader, featuring game lounges, sleep pods, soundproof creator studios, and an open amphitheater for all-hands meetings.'
    },
    {
      id: 11,
      title: 'The Imperial Penthouse Suite',
      category: 'Luxury Residences',
      location: 'Juhu Beach, Mumbai',
      area: '5,800 Sq. Ft.',
      year: '2023',
      scope: 'Luxury Penthouse Fitout, Italian Joinery, Private Terrace Garden',
      img: '/cs-india/2602%20D2.png',
      desc: 'A beachfront sanctuary featuring bespoke fluted wall paneling, automated ambient lighting scenes, custom imported walk-in wardrobes, and an open-air sea view terrace.'
    },
    {
      id: 12,
      title: 'Opal Signature Fine Dining Club',
      category: 'Hospitality & Dining',
      location: 'Connaught Place, New Delhi',
      area: '7,200 Sq. Ft.',
      year: '2024',
      scope: 'Atmospheric Interior Fitout, Acoustic Ceilings, Custom Millwork',
      img: '/cs-india/IMG-0104.PNG',
      desc: 'A Michelin-caliber dining environment crafted with custom emerald velvet upholstery, antique bronze screens, bespoke terrazzo flooring, and private VIP dining salons.'
    }
  ];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="projects-gallery-wrapper">
      {/* Portfolio Header & Filter Section */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <Container className="py-4">
          <div className="text-center pb-5">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="section-label-line"></div>
              <h6 className="text-uppercase mb-0 font-sans section-label-text">
                Delivered Landmarks
              </h6>
              <div className="section-label-line section-label-line--right"></div>
            </div>
            <h2 className="display-4 font-cinzel text-dark mb-3">
              The CS India <span className="font-serif text-logo-accent font-italic accent-italic">Portfolio</span>
            </h2>
            <p className="text-muted font-sans mx-auto" style={{ maxWidth: '650px', fontSize: '1.05rem' }}>
              Explore our turnkey corporate headquarters, high-performance workspaces, ultra-luxury residences, and boutique commercial environments executed across India.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn font-sans px-4 py-2 rounded-pill small ${
                  filter === cat
                    ? 'btn-dark text-white fw-bold shadow'
                    : 'btn-outline-secondary text-dark'
                }`}
                style={{
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Projects */}
          <Row className="g-4">
            <AnimatePresence>
              {filtered.map((proj) => (
                <Col lg={4} md={6} key={proj.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="h-100 bg-white rounded-4 overflow-hidden shadow-sm border group cursor-pointer hover-lift"
                    onClick={() => setSelectedProject(proj)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="position-relative overflow-hidden" style={{ height: '280px' }}>
                      <img
                        src={proj.img}
                        alt={proj.title}
                        className="w-100 h-100 object-fit-cover transition-all"
                        style={{ transition: 'transform 0.6s ease' }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className="badge bg-dark bg-opacity-75 text-white px-3 py-2 font-sans small text-uppercase">
                          {proj.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 d-flex flex-column justify-content-between">
                      <div>
                        <h4 className="font-cinzel text-dark mb-2" style={{ fontSize: '1.25rem' }}>{proj.title}</h4>
                        <p className="font-sans text-muted small mb-3 d-flex align-items-center gap-2">
                          <FaMapMarkerAlt style={{ color: 'var(--cs-lightblue)' }} />
                          <span>{proj.location}</span>
                        </p>
                        <p className="font-sans text-muted mb-4 small" style={{ lineHeight: 1.6 }}>
                          {proj.desc.slice(0, 110)}...
                        </p>
                      </div>

                      <div className="pt-3 border-top d-flex justify-content-between align-items-center font-sans small">
                        <span className="text-muted d-flex align-items-center gap-1">
                          <FaRulerCombined style={{ color: 'var(--cs-lightblue)' }} /> {proj.area}
                        </span>
                        <span className="text-dark fw-bold text-uppercase" style={{ color: 'var(--cs-lightblue)' }}>
                          View Case Study →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </AnimatePresence>
          </Row>
        </Container>
      </section>

      {/* Interactive Project Detail Modal */}
      <Modal
        show={!!selectedProject}
        onHide={() => setSelectedProject(null)}
        size="lg"
        centered
        className="project-modal"
      >
        {selectedProject && (
          <div className="p-0 rounded-4 overflow-hidden bg-white">
            <div className="position-relative" style={{ height: '380px' }}>
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-100 h-100 object-fit-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="btn position-absolute top-0 end-0 m-3 rounded-circle bg-dark text-white p-2 d-flex align-items-center justify-content-center shadow"
                style={{ width: '40px', height: '40px', border: 'none' }}
              >
                <FaTimes size={18} />
              </button>
              <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white card-gradient-overlay">
                <span className="badge bg-primary mb-2 px-3 py-1 text-uppercase">{selectedProject.category}</span>
                <h3 className="font-cinzel mb-0">{selectedProject.title}</h3>
              </div>
            </div>

            <div className="p-4 p-md-5">
              <Row className="g-4 mb-4">
                <Col sm={4}>
                  <small className="text-muted font-sans text-uppercase d-block mb-1">Location</small>
                  <p className="font-sans text-dark fw-bold mb-0">{selectedProject.location}</p>
                </Col>
                <Col sm={4}>
                  <small className="text-muted font-sans text-uppercase d-block mb-1">Delivered Area</small>
                  <p className="font-sans text-dark fw-bold mb-0">{selectedProject.area}</p>
                </Col>
                <Col sm={4}>
                  <small className="text-muted font-sans text-uppercase d-block mb-1">Year Completed</small>
                  <p className="font-sans text-dark fw-bold mb-0">{selectedProject.year}</p>
                </Col>
              </Row>

              <div className="mb-4">
                <h5 className="font-cinzel text-dark mb-2">CS India Scope of Work</h5>
                <p className="font-sans text-primary fw-medium mb-3" style={{ color: 'var(--cs-lightblue)' }}>
                  {selectedProject.scope}
                </p>
                <h5 className="font-cinzel text-dark mb-2">Architectural Overview</h5>
                <p className="font-sans text-muted lead" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                  {selectedProject.desc}
                </p>
              </div>

              <div className="p-3 bg-light rounded-3 d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div className="d-flex align-items-center gap-2 font-sans small text-dark">
                  <FaCheckCircle style={{ color: 'var(--cs-green)' }} />
                  <span>Executed 100% On-Time with CS India Turnkey Protocol</span>
                </div>
                <a href="#contact" onClick={() => setSelectedProject(null)} className="btn btn-dark rounded-0 px-4 py-2 font-sans text-uppercase small">
                  Inquire for Similar Project
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
