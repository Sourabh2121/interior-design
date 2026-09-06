'use client';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="position-relative vh-100 d-flex align-items-center overflow-hidden" style={{ backgroundColor: 'var(--bg-dark)' }}>
      {/* Fullscreen Background Video */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0 overflow-hidden bg-dark">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute top-50 start-50 translate-middle w-100 h-100"
          style={{ objectFit: 'cover', opacity: 0.7 }}
        >
          {/* User's original video */}
          <source src="https://81673378.delivery.rocketcdn.me/wp-content/uploads/2026/05/Showcase-Video-30Th-Apr-No-White-Screen11.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay with luxury gradient */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'var(--gradient-overlay)', zIndex: 1 }}></div>

        {/* Vertical Social Links (Contra style) */}
        <div className="position-absolute d-none d-lg-flex flex-column align-items-center gap-4" style={{ left: '40px', top: '50%', transform: 'translateY(-50%)', zIndex: 3 }}>
          <div style={{ width: '1px', height: '100px', backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
          <p className="text-white text-uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.2em', fontSize: '0.8rem', opacity: 0.7 }}>Follow Us</p>
          <div style={{ width: '1px', height: '100px', backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
        </div>

        {/* Main Content */}
        <Container className="position-relative h-100 d-flex align-items-center" style={{ zIndex: 2 }}>
          <Row className="w-100">
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4"
              >
                <div className="d-flex align-items-center mb-4">
                  <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--accent-color)', marginRight: '15px' }}></div>
                  <h6 className="text-uppercase mb-0 text-white font-sans" style={{ letterSpacing: '0.3em', fontSize: '0.9rem' }}>
                    Interior Design Studio
                  </h6>
                </div>
              </motion.div>

              <motion.h1 
                className="display-2 fw-bold text-white font-cinzel mb-4"
                style={{ lineHeight: 1.1 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Designing Spaces <br />
                That <span className="font-serif font-italic" style={{ color: 'var(--cs-lightblue)', fontStyle: 'italic' }}>Inspire</span>
              </motion.h1>
              
              <motion.p 
                className="lead text-white font-sans mb-5"
                style={{ maxWidth: '600px', fontWeight: 300, opacity: 0.9, lineHeight: 1.8, fontSize: '1.1rem' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4 }}
              >
                CS India is a premium interior architecture firm. We blend aesthetics and functionality to create environments that elevate your brand and lifestyle.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="d-flex flex-wrap gap-4 align-items-center"
              >
                <button 
                  className="btn rounded-0 px-5 py-3 text-uppercase font-sans shadow-lg"
                  style={{ 
                    backgroundColor: 'var(--accent-color)', 
                    color: '#ffffff',
                    border: '1px solid var(--accent-color)',
                    letterSpacing: '0.15em',
                    fontSize: '0.85rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'var(--accent-color)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'var(--accent-color)';
                    e.target.style.color = '#ffffff';
                  }}
                >
                  Discover More
                </button>
                <div className="d-flex align-items-center text-white" style={{ cursor: 'pointer' }}>
                  <div className="rounded-circle border border-white d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', transition: 'all 0.3s ease' }}
                    onMouseOver={e => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}
                    onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'white'; }}
                  >
                    ▶
                  </div>
                  <span className="text-uppercase font-sans" style={{ letterSpacing: '0.1em', fontSize: '0.85rem' }}>Play Reel</span>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>

        {/* Scroll Indicator */}
        <motion.div 
          className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-center z-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="#about" className="text-white text-decoration-none d-flex flex-column align-items-center">
            <span className="text-uppercase font-sans mb-3" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', opacity: 0.6 }}>Scroll</span>
            <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255,255,255,0.3)', position: 'relative', overflow: 'hidden' }}>
              <motion.div 
                className="w-100 h-100 bg-white"
                initial={{ y: '-100%' }}
                animate={{ y: '100%' }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
