'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBuilding, FaCouch, FaStore, FaTools, FaHome, FaDraftingCompass } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  { id: 1, title: 'Office Interior', icon: <FaBuilding size={35} />, desc: 'Modern office spaces that enhance productivity and reflect your brand identity.' },
  { id: 2, title: 'Commercial', icon: <FaStore size={35} />, desc: 'Stunning commercial environments tailored for retail and hospitality.' },
  { id: 3, title: 'Modular Furniture', icon: <FaCouch size={35} />, desc: 'Custom, ergonomic, and aesthetic furniture solutions for dynamic workspaces.' },
  { id: 4, title: 'Turnkey Projects', icon: <FaTools size={35} />, desc: 'End-to-end execution from design concept to final handover.' },
  { id: 5, title: 'Residential', icon: <FaHome size={35} />, desc: 'Premium and luxurious residential designs tailored to your lifestyle.' },
  { id: 6, title: 'Space Planning', icon: <FaDraftingCompass size={35} />, desc: 'Optimizing spatial layouts for maximum efficiency and aesthetic flow.' }
];

export default function ServicesSection() {
  return (
    <section id="services" className="" style={{ backgroundColor: 'var(--primary-color)' }}>
      <Container className="py-5 my-4">
        <div className="text-center mb-5 pb-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--accent-color)', marginRight: '10px' }}></div>
              <h6 className="text-uppercase mb-0 font-sans" style={{ color: 'var(--accent-color)', letterSpacing: '0.2em', fontSize: '0.8rem' }}>
                Expertise
              </h6>
              <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--accent-color)', marginLeft: '10px' }}></div>
            </div>

            <h2 className="display-4 text-dark font-cinzel">
              Our <span className="font-serif text-logo-accent font-italic" style={{ fontStyle: 'italic', color: 'var(--cs-lightblue)' }}>Expertise</span>
            </h2>
            <p className="lead text-muted mx-auto font-sans" style={{ maxWidth: '600px', fontWeight: 300, fontSize: '1.05rem' }}>
              We provide comprehensive interior design and build solutions to transform your vision into reality.
            </p>
          </motion.div>
        </div>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card h-100 border-0 luxury-card p-2"
                style={{ borderRadius: '0' }}
              >
                <div className="card-body p-4 p-lg-5 d-flex flex-column position-relative z-1 h-100">
                  <div className="mb-4" style={{ color: 'var(--accent-color)' }}>
                    {service.icon}
                  </div>
                  <h4 className="font-cinzel text-dark mb-3" style={{ fontSize: '1.4rem' }}>{service.title}</h4>
                  <p className="font-sans mb-4 flex-grow-1" style={{ color: 'var(--text-dark)', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.8 }}>{service.desc}</p>

                  <div className="mt-auto">
                    <a href="#" className="font-sans text-uppercase text-decoration-none d-inline-flex align-items-center"
                      style={{ color: 'var(--text-dark)', fontSize: '0.8rem', letterSpacing: '0.1em', transition: 'color 0.3s', fontWeight: 500 }}
                      onMouseOver={e => e.currentTarget.style.color = 'var(--accent-color)'}
                      onMouseOut={e => e.currentTarget.style.color = 'var(--text-dark)'}
                    >
                      Explore <span className="ms-2">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5 pt-4">
          <Link href="/services" className="text-decoration-none">
            <button
              className="btn rounded-0 px-5 py-3 text-uppercase font-sans"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--text-dark)',
                border: '1px solid var(--accent-color)',
                letterSpacing: '0.15em',
                fontSize: '0.85rem',
                transition: 'all 0.4s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'var(--accent-color)';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'var(--text-dark)';
              }}
            >
              View All Services
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
