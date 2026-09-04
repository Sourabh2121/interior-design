'use client';
import { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="about" className="py-5 overflow-hidden" ref={ref}>
      <Container className="py-5">
        <Row className="align-items-center gx-5">
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="position-relative"
            >
              <div 
                className="rounded-4 overflow-hidden shadow-lg position-relative z-1" 
                style={{ height: '550px' }}
              >
                <motion.div 
                  className="w-100 h-100" 
                  style={{
                    background: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80") center/cover no-repeat',
                    y: yImage,
                    scale: 1.1 // to prevent edge clipping on translate
                  }}
                ></motion.div>
              </div>
              {/* Decorative element behind image */}
              <div 
                className="position-absolute rounded-4 z-0" 
                style={{ 
                  backgroundColor: 'var(--accent-color)', 
                  top: '-20px', 
                  bottom: '20px', 
                  left: '-20px', 
                  right: '20px',
                  opacity: 0.2 
                }}
              ></div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h6 className="text-uppercase fw-bold mb-3" style={{ color: 'var(--accent-color)', letterSpacing: '2px' }}>
                About Our Agency
              </h6>
              <h2 className="display-5 fw-bold mb-4 text-dark">
                Redefining Commercial Interiors
              </h2>
              <p className="lead text-muted mb-4">
                With over a decade of experience, we specialize in designing and building modern, luxurious, and highly functional workspaces that elevate brand identity and foster innovation.
              </p>
              
              <Row className="mt-5 g-4">
                <Col sm={6}>
                  <div className="d-flex align-items-center">
                    <h2 className="display-4 fw-bold mb-0 me-3" style={{ color: 'var(--primary-color)' }}>12+</h2>
                    <p className="mb-0 text-muted fw-medium leading-tight">Years of<br/>Experience</p>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="d-flex align-items-center">
                    <h2 className="display-4 fw-bold mb-0 me-3" style={{ color: 'var(--primary-color)' }}>500+</h2>
                    <p className="mb-0 text-muted fw-medium leading-tight">Projects<br/>Completed</p>
                  </div>
                </Col>
              </Row>
              
              <Link href="/about" className="text-decoration-none">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn mt-5 rounded-pill px-5 py-3 fw-bold text-white shadow"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                >
                  Discover More About Us
                </motion.button>
              </Link>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
