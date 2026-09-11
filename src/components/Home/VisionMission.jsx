'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function VisionMission() {
  return (
    <section className="" style={{ backgroundColor: 'var(--secondary-color)' }}>
      <Container className="pb-3 pb-lg-5">
        <Row className="g-5">
          {/* Vision Section */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="px-4 py-3 h-100 rounded-4 shadow-sm"
              style={{ backgroundColor: 'var(--primary-color)' }}
            >
              <div className="mb-4 d-inline-block p-3 rounded-circle" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12h3M19 12h3M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <h3 className="fw-bold mb-4" style={{ color: 'var(--text-dark)' }}>Our Vision</h3>
              <p className="text-dark fs-5" style={{ lineHeight: 1.8, opacity: 0.8 }}>
                To be the global benchmark in premium commercial interior design. We envision a world where every workspace is a masterpiece—an environment that inspires creativity, fosters well-being, and drives unparalleled business success.
              </p>
            </motion.div>
          </Col>

          {/* Mission Section */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-4 py-3 h-100 rounded-4 shadow-lg"
              style={{ backgroundColor: 'var(--secondary-color)' }}
            >
              <div className="mb-4 d-inline-block p-3 rounded-circle" style={{ backgroundColor: 'rgba(3, 169, 244, 0.1)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="fw-bold mb-4" style={{ color: 'var(--text-dark)' }}>Our Mission</h3>
              <p className="text-dark fs-5" style={{ lineHeight: 1.8, opacity: 0.8 }}>
                To transform ordinary spaces into extraordinary experiences. We strive to deliver innovative, functional, and aesthetically stunning interior solutions tailored to the unique identity and operational needs of every brand we partner with.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
