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
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <section id="about" className="overflow-hidden" ref={ref} style={{ backgroundColor: 'var(--secondary-color)' }}>
      <Container className="py-5 mt-5 mb-5">
        <Row className="align-items-center gx-5">
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="position-relative"
            >
              {/* Main Large Image */}
              <motion.div
                className="overflow-hidden position-relative z-1 shadow-lg"
                style={{
                  height: '550px',
                  width: '85%',
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                  border: '1px solid rgba(0,0,0,0.05)'
                }}
              >
                <motion.div
                  className="w-100 h-100"
                  style={{
                    background: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80") center/cover no-repeat',
                    y: yImage,
                    scale: 1.15
                  }}
                ></motion.div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(5,5,5,0.1)' }}></div>
              </motion.div>

              {/* Secondary Floating Image */}
              <motion.div
                className="overflow-hidden position-absolute z-2 shadow-lg"
                style={{
                  height: '300px',
                  width: '50%',
                  bottom: '-50px',
                  right: '0',
                  border: '8px solid var(--bg-light)',
                  y: useTransform(scrollYProgress, [0, 1], [50, -50])
                }}
              >
                <div
                  className="w-100 h-100"
                  style={{
                    background: 'url("https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&q=80") center/cover no-repeat'
                  }}
                ></div>
              </motion.div>

              {/* Decorative element behind images */}
              <div
                className="position-absolute z-0"
                style={{
                  border: '1px solid var(--accent-color)',
                  top: '-30px',
                  bottom: '30px',
                  left: '-30px',
                  right: '15%',
                  opacity: 0.3,
                  background: "#129dd98c"
                }}
              ></div>
            </motion.div>
          </Col>
          <Col lg={6} className="ps-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="d-flex align-items-center mb-4">
                <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-color)', marginRight: '15px' }}></div>
                <h6 className="text-uppercase mb-0 font-sans" style={{ color: 'var(--accent-color)', letterSpacing: '0.2em', fontSize: '0.8rem' }}>
                  The Agency
                </h6>
              </div>

              <h2 className="display-4 mb-4 text-dark font-cinzel" style={{ lineHeight: 1.2 }}>
                Redefining <br />
                <span className="font-serif text-logo-accent font-italic" style={{ fontStyle: 'italic', color: 'var(--cs-lightblue)' }}>Commercial Interiors</span>
              </h2>

              <p className="lead text-muted mb-5 font-sans" style={{ fontWeight: 300, lineHeight: 1.8, fontSize: '1.1rem' }}>
                With over a decade of experience, we specialize in designing and building modern, luxurious, and highly functional workspaces that elevate brand identity and foster innovation.
              </p>

              <Row className="mt-4 mb-5 g-4 border-top border-bottom py-4" style={{ borderColor: 'rgba(255,255,255,0.05) !important' }}>
                <Col sm={6}>
                  <div className="d-flex flex-column">
                    <h2 className="display-3 mb-2 font-cinzel" style={{ color: 'var(--cs-lightblue)' }}>12+</h2>
                    <p className="mb-0 text-uppercase text-dark font-sans" style={{ letterSpacing: '0.1em', fontSize: '0.75rem', opacity: 0.7 }}>Years of Excellence</p>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="d-flex flex-column">
                    <h2 className="display-3 mb-2 font-cinzel" style={{ color: 'var(--cs-lightblue)' }}>500+</h2>
                    <p className="mb-0 text-uppercase text-dark font-sans" style={{ letterSpacing: '0.1em', fontSize: '0.75rem', opacity: 0.7 }}>Projects Completed</p>
                  </div>
                </Col>
              </Row>

              <Link href="/about" className="text-decoration-none">
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
                  Discover More
                </button>
              </Link>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
