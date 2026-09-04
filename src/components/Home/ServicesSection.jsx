'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBuilding, FaCouch, FaStore, FaTools, FaHome, FaDraftingCompass } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  { id: 1, title: 'Office Interior Design', icon: <FaBuilding size={40} />, desc: 'Modern office spaces that enhance productivity and reflect your brand identity.' },
  { id: 2, title: 'Commercial Spaces', icon: <FaStore size={40} />, desc: 'Stunning commercial environments tailored for retail and hospitality.' },
  { id: 3, title: 'Modular Furniture', icon: <FaCouch size={40} />, desc: 'Custom, ergonomic, and aesthetic furniture solutions for dynamic workspaces.' },
  { id: 4, title: 'Turnkey Projects', icon: <FaTools size={40} />, desc: 'End-to-end execution from design concept to final handover.' },
  { id: 5, title: 'Residential Interior', icon: <FaHome size={40} />, desc: 'Premium and luxurious residential designs tailored to your lifestyle.' },
  { id: 6, title: 'Space Planning', icon: <FaDraftingCompass size={40} />, desc: 'Optimizing spatial layouts for maximum efficiency and aesthetic flow.' }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-5" style={{ backgroundColor: 'var(--secondary-color)' }}>
      <Container className="py-5">
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-4 fw-bold text-dark"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <p className="lead text-muted mx-auto mt-3" style={{ maxWidth: '700px' }}>
            We provide comprehensive interior design and build solutions to transform your vision into reality.
          </p>
        </div>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="card h-100 border-0 shadow-sm overflow-hidden"
                style={{ borderRadius: '20px', transition: 'box-shadow 0.3s' }}
              >
                <div className="card-body p-5 position-relative z-1 bg-white">
                  <div className="mb-4" style={{ color: 'var(--accent-color)' }}>
                    {service.icon}
                  </div>
                  <h4 className="fw-bold mb-3 text-dark">{service.title}</h4>
                  <p className="text-muted mb-4">{service.desc}</p>
                  <a href="#" className="fw-bold text-decoration-none d-inline-flex align-items-center" style={{ color: 'var(--primary-color)' }}>
                    Read More <span className="ms-2">→</span>
                  </a>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <Link href="/services" className="text-decoration-none">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-lg rounded-pill px-5 py-3 fw-bold shadow"
              style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}
            >
              View All Services
            </motion.button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
