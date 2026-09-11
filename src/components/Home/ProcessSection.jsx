'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const steps = [
  { id: 1, title: 'Consultation', desc: 'Understanding your vision, requirements, and brand identity.' },
  { id: 2, title: 'Concept Design', desc: 'Developing mood boards, 3D renders, and spatial layouts.' },
  { id: 3, title: 'Execution', desc: 'Our expert team brings the design to life with precision.' },
  { id: 4, title: 'Handover', desc: 'Final walkthrough and delivering your dream space on time.' }
];

export default function ProcessSection() {
  return (
    <section className="" style={{ backgroundColor: 'var(--secondary-color)', overflow: 'hidden' }}>
      <Container className="py-5">
        <div className="text-center pb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--accent-color)', marginRight: '10px' }}></div>
              <h6 className="text-uppercase mb-0 font-sans" style={{ color: 'var(--accent-color)', letterSpacing: '0.2em', fontSize: '0.8rem' }}>
                How We Work
              </h6>
              <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--accent-color)', marginLeft: '10px' }}></div>
            </div>
            <h2 className="display-4 text-dark font-cinzel mb-2">
              Our <span className="font-serif text-logo-accent font-italic" style={{ fontStyle: 'italic', color: 'var(--cs-lightblue)' }}>Design Process</span>
            </h2>
          </motion.div>
        </div>

        <Row className="g-4">
          {steps.map((step, index) => (
            <Col md={6} lg={3} key={step.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-100 position-relative p-4"
              >
                <div className="mb-4">
                  <h2 className="font-cinzel" style={{ color: 'rgba(3, 169, 244, 0.2)', fontSize: '5rem', lineHeight: 1 }}>
                    0{step.id}
                  </h2>
                </div>
                <h4 className="font-cinzel text-dark mb-3" style={{ fontSize: '1.3rem' }}>{step.title}</h4>
                <p className="font-sans mb-0" style={{ color: 'var(--text-dark)', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.8 }}>
                  {step.desc}
                </p>
                {/* Connecting Line */}
                {index !== steps.length - 1 && (
                  <div className="d-none d-lg-block position-absolute" style={{
                    top: '60px',
                    right: '0%',
                    width: '40%',
                    height: '1px',
                    borderTop: '1px dashed rgba(3, 169, 244, 0.3)'
                  }}></div>
                )}
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
