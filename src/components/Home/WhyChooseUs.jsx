'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { id: '01', title: 'Consultation', desc: 'Understanding your brand, culture, and spatial requirements.' },
  { id: '02', title: 'Design Concept', desc: 'Creating 3D visuals and detailed space planning.' },
  { id: '03', title: 'Execution', desc: 'Managing the build-out with our in-house experts.' },
  { id: '04', title: 'Handover', desc: 'Delivering the turnkey project on time and within budget.' }
];

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="bg-white position-relative" ref={containerRef}>
      <Container className="py-5">
        <div className="text-center mb-5 pb-4">
          <motion.h6
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-uppercase fw-bold" style={{ color: 'var(--accent-color)', letterSpacing: '2px' }}
          >
            Our Process
          </motion.h6>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-4 fw-bold text-dark"
          >
            How We <span className="text-gradient">Work</span>
          </motion.h2>
        </div>

        <div className="position-relative">
          {/* Vertical Line */}
          <div className="position-absolute start-50 translate-middle-x h-100 bg-light d-none d-lg-block" style={{ width: '4px' }}>
            <motion.div
              style={{ height: lineHeight, backgroundColor: 'var(--accent-color)' }}
              className="w-100"
            />
          </div>

          {steps.map((step, index) => (
            <Row key={step.id} className={`align-items-center mb-5 ${index % 2 === 0 ? '' : 'flex-lg-row-reverse'}`}>
              <Col lg={5} className={index % 2 === 0 ? 'text-lg-end' : 'text-lg-start'}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="p-4 rounded-4 shadow-sm bg-white border"
                >
                  <h3 className="fw-bold text-dark mb-2">{step.title}</h3>
                  <p className="text-muted mb-0">{step.desc}</p>
                </motion.div>
              </Col>

              <Col lg={2} className="d-none d-lg-flex justify-content-center align-items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="rounded-circle d-flex align-items-center justify-content-center fw-bold shadow"
                  style={{ width: '60px', height: '60px', backgroundColor: 'var(--primary-color)', color: 'var(--accent-color)', zIndex: 2, fontSize: '1.2rem' }}
                >
                  {step.id}
                </motion.div>
              </Col>

              <Col lg={5}>
                {/* Empty column for spacing */}
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
}
