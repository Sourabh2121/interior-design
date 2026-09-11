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
    <section id="services" className="services-section">
      <Container className="py-5">
        <div className="text-center pb-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="section-label-line"></div>
              <h6 className="text-uppercase mb-0 font-sans section-label-text">
                Expertise
              </h6>
              <div className="section-label-line section-label-line--right"></div>
            </div>

            <h2 className="display-4 text-dark font-cinzel">
              Our <span className="font-serif text-logo-accent font-italic accent-italic">Expertise</span>
            </h2>
            <p className="lead text-muted mx-auto font-sans services-description">
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
                className="card h-100 border-0 luxury-card p-2 services-card"
              >
                <div className="card-body p-4 p-lg-5 d-flex flex-column position-relative z-1 h-100">
                  <div className="mb-4 service-icon">
                    {service.icon}
                  </div>
                  <h4 className="font-cinzel text-dark mb-3 service-title">{service.title}</h4>
                  <p className="font-sans mb-4 flex-grow-1 content-description">{service.desc}</p>

                  <div className="mt-auto">
                    <a href="#" className="font-sans text-uppercase text-decoration-none d-inline-flex align-items-center explore-link">
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
            <button className="btn rounded-0 px-5 py-3 text-uppercase font-sans btn-outline-accent">
              View All Services
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
