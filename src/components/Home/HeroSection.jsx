'use client';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="position-relative vh-100 d-flex align-items-center overflow-hidden hero-section">
      {/* Fullscreen Background Video */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0 overflow-hidden" style={{ backgroundColor: "rgb(33 37 41 / 36%)" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute top-50 start-50 translate-middle w-100 h-100 hero-video"
        >
          {/* User's original video */}
          {/* <source src="https://81673378.delivery.rocketcdn.me/wp-content/uploads/2026/05/Showcase-Video-30Th-Apr-No-White-Screen11.mp4" type="video/mp4" /> */}
          <source src="/cs-india/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay with luxury gradient */}
        <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>

        {/* Vertical Social Links (Contra style) */}
        <div className="position-absolute d-none d-lg-flex flex-column align-items-center gap-4 hero-social-links">
          <div className="hero-social-line"></div>
          <p className="text-white text-uppercase hero-social-text">Follow Us</p>
          <div className="hero-social-line"></div>
        </div>

        {/* Main Content */}
        <Container className="position-relative h-100 d-flex align-items-center hero-content">
          <Row className="w-100">
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4"
              >
                <div className="d-flex align-items-center mb-4">
                  <div className="section-label-line section-label-line--50"></div>
                  <h6 className="text-uppercase mb-0 text-white font-sans hero-subtitle">
                    Interior Design Studio
                  </h6>
                </div>
              </motion.div>

              <motion.h1
                className="display-2 fw-bold text-white font-cinzel mb-4 hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Designing Spaces <br />
                That <span className="font-serif font-italic accent-italic">Inspire</span>
              </motion.h1>

              <motion.p
                className="lead text-white font-sans mb-5 hero-description"
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
                  className="btn rounded-0 px-5 py-3 text-uppercase font-sans shadow-lg btn-accent-fill"
                >
                  Discover More
                </button>
                <div className="d-flex align-items-center text-white hero-cursor-pointer">
                  <div className="rounded-circle border border-white d-flex align-items-center justify-content-center me-3 hero-play-btn">
                    ▶
                  </div>
                  <span className="text-uppercase font-sans hero-play-text">Play Reel</span>
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
            <span className="text-uppercase font-sans mb-3 hero-scroll-text">Scroll</span>
            <div className="hero-scroll-bar">
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
