'use client';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="position-relative vh-100 d-flex align-items-center overflow-hidden" style={{ backgroundColor: 'var(--primary-color)' }}>
      {/* Fullscreen Background Video */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0 overflow-hidden bg-dark">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute top-50 start-50 translate-middle w-100 h-100"
          style={{ objectFit: 'cover' }}
        >
          {/* Using the video provided by the user */}
          <source src="https://81673378.delivery.rocketcdn.me/wp-content/uploads/2026/05/Showcase-Video-30Th-Apr-No-White-Screen11.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to make text readable */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(11, 31, 51, 0.75)' }}></div>
      </div>

      <Container className="position-relative z-1">
        <Row>
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h1 className="display-2 fw-bolder text-white mb-4" style={{ lineHeight: 1.1 }}>
                Designing & Building <span className="text-gradient">Intelligent Spaces.</span>
              </h1>
              <p className="lead text-white-50 mb-5 fs-4" style={{ maxWidth: '600px' }}>
                Flipspaces is a global interior design and build firm. We design and build offices, hospitals, retail, and education spaces across India, the US, and the UAE.
              </p>
              <div className="d-flex gap-4">
                <Link href="/projects" className="text-decoration-none">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg"
                    style={{ backgroundColor: 'var(--accent-color)', color: 'var(--text-dark)', border: 'none' }}
                  >
                    View Our Portfolio
                  </motion.button>
                </Link>
                <Link href="/particles" className="text-decoration-none">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold glassmorphism"
                  >
                    Interactive 3D View
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="position-absolute bottom-0 start-50 translate-middle-x mb-5 z-1"
      >
        <a href="#about" className="text-white opacity-75">
          <FaArrowDown size={30} />
        </a>
      </motion.div>
    </section>
  );
}
