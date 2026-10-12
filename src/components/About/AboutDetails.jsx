'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLeaf, FaDraftingCompass, FaAward, FaUsers, FaClock, FaCheckCircle } from 'react-icons/fa';

export default function AboutDetails() {
  const pillars = [
    {
      icon: <FaDraftingCompass size={32} />,
      title: 'Architectural Precision',
      desc: 'Every layout is designed with parametric spatial engineering, balancing aesthetic majesty with optimal traffic flow, acoustics, and natural illumination.'
    },
    {
      icon: <FaLeaf size={32} />,
      title: 'Sustainable & Green',
      desc: 'We adhere to IGBC & LEED green building guidelines, utilizing eco-conscious low-VOC finishes, energy-efficient fixtures, and locally sourced natural stones.'
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: 'Turnkey Accountability',
      desc: 'Single-source responsibility from concept design and MEP engineering to procurement, statutory compliance, and final white-glove handover.'
    },
    {
      icon: <FaAward size={32} />,
      title: 'Bespoke Craftsmanship',
      desc: 'Collaborations with master artisans across India and premier European ateliers for custom millwork, hand-cut brass inlays, and book-matched Italian marble.'
    }
  ];

  const milestones = [
    { year: '2012', title: 'Foundation of CS India', desc: 'Established in Mumbai as a boutique interior architecture studio focused on luxury commercial spaces.' },
    { year: '2016', title: 'Pan-India Corporate Expansion', desc: 'Inaugurated dedicated studios in Bengaluru and Delhi NCR, delivering 100,000+ sq ft tech headquarters.' },
    { year: '2019', title: 'Turnkey EPC & Manufacturing', desc: 'Integrated in-house modular furniture joinery and MEP engineering division to guarantee zero delivery delays.' },
    { year: '2023', title: 'National Design Excellence Award', desc: 'Honored as India’s Most Innovative Turnkey Interior Architecture Firm for sustainable commercial builds.' },
    { year: 'Present', title: '500+ Landmark Deliveries', desc: 'Managing over 1.5 million square feet of high-end corporate towers, luxury penthouses, and hospitality hubs.' }
  ];

  const leadership = [
    {
      name: 'Aditya Vardhan Sharma',
      role: 'Principal Architect & Founder',
      bio: 'Over 18 years of visionary architectural leadership across India and the UK, specializing in high-performance workspaces.',
      img: '/cs-india/399.jpg'
    },
    {
      name: 'Meera Sen',
      role: 'Head of Interior Design & Curation',
      bio: 'Leading CS India’s creative design studio, blending modern minimalism with timeless Indian material heritage.',
      img: '/cs-india/106.jpg'
    },
    {
      name: 'Rohan Deshmukh',
      role: 'Director of Turnkey Project Execution',
      bio: 'Oversees 200+ on-site civil and MEP engineers, ensuring every CS India project meets our stringent on-time delivery metric.',
      img: '/cs-india/70.jpg'
    }
  ];

  return (
    <div className="about-details-wrapper">
      {/* Heritage & Origin Story */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <Container className="py-4">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="section-label-line"></div>
                  <h6 className="text-uppercase mb-0 font-sans section-label-text">
                    Our Heritage
                  </h6>
                </div>
                <h2 className="display-4 font-cinzel text-dark mb-4">
                  The Story of <span className="font-serif text-logo-accent font-italic accent-italic">CS India</span>
                </h2>
                <p className="lead text-muted font-sans mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Founded over a decade ago, <strong>CS India</strong> began with a singular conviction: spaces should not merely be occupied—they should inspire, elevate, and endure.
                </p>
                <p className="text-muted font-sans mb-4" style={{ lineHeight: 1.8 }}>
                  What started as an ambitious studio in Mumbai has grown into one of India’s most trusted full-service interior architecture and turnkey contracting firms. Today, CS India operates across Mumbai, Bengaluru, Delhi NCR, and Hyderabad, partnering with global tech giants, multinational corporations, boutique hoteliers, and discerning private homeowners.
                </p>
                <p className="text-muted font-sans mb-4" style={{ lineHeight: 1.8 }}>
                  Our distinctive edge lies in our integrated turnkey model: we eliminate the friction between conceptual designers and site contractors by bringing architectural planning, 3D visualization, material procurement, civil MEP execution, and custom joinery under one unified CS India umbrella.
                </p>

                <div className="p-4 rounded-3 bg-light border-start border-4" style={{ borderColor: 'var(--cs-lightblue) !important' }}>
                  <p className="mb-0 font-sans fst-italic text-dark" style={{ fontSize: '0.95rem' }}>
                    "At CS India, we believe every square foot represents an opportunity to craft an environment where human potential and aesthetic sophistication thrive in harmony."
                  </p>
                </div>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="position-relative"
              >
                <div className="rounded-4 overflow-hidden shadow-lg position-relative" style={{ height: '520px' }}>
                  <img
                    src="/cs-india/FINAL1.RGB_color.jpg"
                    alt="CS India Interior Studio"
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white card-gradient-overlay">
                    <span className="badge bg-primary mb-2 px-3 py-2 text-uppercase">Excellence in Craft</span>
                    <h5 className="font-cinzel mb-0">CS India Design Headquarters</h5>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pillars of Design */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container className="py-4">
          <div className="text-center pb-5">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="section-label-line"></div>
              <h6 className="text-uppercase mb-0 font-sans section-label-text">
                Core Philosophy
              </h6>
              <div className="section-label-line section-label-line--right"></div>
            </div>
            <h2 className="display-4 font-cinzel text-dark mb-3">
              The Four Pillars of <span className="font-serif text-logo-accent font-italic accent-italic">CS India</span>
            </h2>
            <p className="text-muted font-sans mx-auto" style={{ maxWidth: '650px', fontSize: '1.05rem' }}>
              Our work is anchored in design integrity, engineering rigor, and an uncompromising commitment to project timeliness.
            </p>
          </div>

          <Row className="g-4">
            {pillars.map((pillar, idx) => (
              <Col md={6} lg={3} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-4 bg-white rounded-4 shadow-sm h-100 border border-0 hover-lift"
                >
                  <div className="p-3 d-inline-block rounded-3 mb-4" style={{ backgroundColor: 'rgba(3, 169, 244, 0.1)', color: 'var(--cs-lightblue)' }}>
                    {pillar.icon}
                  </div>
                  <h4 className="font-cinzel text-dark mb-3" style={{ fontSize: '1.25rem' }}>{pillar.title}</h4>
                  <p className="font-sans text-muted mb-0" style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>
                    {pillar.desc}
                  </p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Milestones / Journey */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <Container className="py-4">
          <div className="text-center pb-5">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="section-label-line"></div>
              <h6 className="text-uppercase mb-0 font-sans section-label-text">
                Our Evolution
              </h6>
              <div className="section-label-line section-label-line--right"></div>
            </div>
            <h2 className="display-4 font-cinzel text-dark mb-3">
              Milestones of <span className="font-serif text-logo-accent font-italic accent-italic">Excellence</span>
            </h2>
          </div>

          <div className="position-relative">
            <Row className="g-4">
              {milestones.map((m, idx) => (
                <Col md={6} lg={4} key={idx}>
                  <div className="p-4 rounded-4 bg-light h-100 border position-relative">
                    <span className="display-5 fw-bold font-cinzel d-block mb-2" style={{ color: 'var(--cs-lightblue)' }}>
                      {m.year}
                    </span>
                    <h5 className="font-cinzel text-dark mb-2">{m.title}</h5>
                    <p className="font-sans text-muted mb-0 small" style={{ lineHeight: 1.7 }}>
                      {m.desc}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>

      {/* Leadership Team */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container className="py-4">
          <div className="text-center pb-5">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="section-label-line"></div>
              <h6 className="text-uppercase mb-0 font-sans section-label-text">
                Leadership
              </h6>
              <div className="section-label-line section-label-line--right"></div>
            </div>
            <h2 className="display-4 font-cinzel text-dark mb-3">
              Meet The <span className="font-serif text-logo-accent font-italic accent-italic">CS India Team</span>
            </h2>
            <p className="text-muted font-sans mx-auto" style={{ maxWidth: '600px' }}>
              Guided by experienced architects, turnkey directors, and construction experts passionate about modern Indian architecture.
            </p>
          </div>

          <Row className="g-4">
            {leadership.map((member, idx) => (
              <Col md={4} key={idx}>
                <div className="bg-white rounded-4 overflow-hidden shadow-sm h-100 border">
                  <div style={{ height: '300px' }} className="position-relative overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h5 className="font-cinzel text-dark mb-1">{member.name}</h5>
                    <p className="font-sans small text-uppercase mb-3" style={{ color: 'var(--cs-lightblue)', fontWeight: 600, letterSpacing: '0.1em' }}>
                      {member.role}
                    </p>
                    <p className="font-sans text-muted mb-0 small" style={{ lineHeight: 1.6 }}>
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Trust & Guarantees */}
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <Container className="py-4">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h2 className="display-5 font-cinzel text-dark mb-4">
                The CS India Quality <br />
                <span className="font-serif text-logo-accent font-italic accent-italic">& Delivery Assurance</span>
              </h2>
              <p className="text-muted font-sans mb-4" style={{ lineHeight: 1.8 }}>
                We believe that building a luxury corporate or residential space should be a joyful and predictable journey. That is why CS India is committed to strict contractual protections:
              </p>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <FaCheckCircle style={{ color: 'var(--cs-green)', fontSize: '20px' }} />
                  <span className="font-sans text-dark"><strong>Guaranteed Move-In Date:</strong> Financial penalty clauses backed by contract.</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <FaCheckCircle style={{ color: 'var(--cs-green)', fontSize: '20px' }} />
                  <span className="font-sans text-dark"><strong>150+ Parameter Quality Audit:</strong> Systematic MEP, acoustic, and finish checks.</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <FaCheckCircle style={{ color: 'var(--cs-green)', fontSize: '20px' }} />
                  <span className="font-sans text-dark"><strong>Transparent Cost Structure:</strong> Zero surprise escalations during construction.</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <FaCheckCircle style={{ color: 'var(--cs-green)', fontSize: '20px' }} />
                  <span className="font-sans text-dark"><strong>Comprehensive 5-Year Maintenance:</strong> Post-occupancy care and warranty on all millwork.</span>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className="rounded-4 overflow-hidden shadow-lg" style={{ height: '380px' }}>
                <img
                  src="/cs-india/Livingroom_ni_1_2.jpg"
                  alt="CS India Interior Execution"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
