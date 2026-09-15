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
    <section id="about" className="overflow-hidden about-section" ref={ref}>
      <Container className="py-5">
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
                className="overflow-hidden position-relative z-1 shadow-lg about-main-image"
                style={{ rotateX, rotateY }}
              >
                <motion.div
                  className="w-100 h-100"
                  style={{
                    background: 'url("/cs-india/FINAL1.RGB_color.jpg") center/cover no-repeat',
                    y: yImage,
                    scale: 1.15
                  }}
                ></motion.div>
                <div className="position-absolute top-0 start-0 w-100 h-100 about-image-overlay"></div>
              </motion.div>

              {/* Secondary Floating Image */}
              <motion.div
                className="overflow-hidden position-absolute z-2 shadow-lg about-secondary-image"
                style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
              >
                <div
                  className="w-100 h-100"
                  style={{
                    background: 'url("/cs-india/Livingroom_ni_1_1.jpg") center/cover no-repeat'
                  }}
                ></div>
              </motion.div>

              {/* Decorative element behind images */}
              <div className="position-absolute z-0 about-decorative-border"></div>
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
                <div className="section-label-line section-label-line--40"></div>
                <h6 className="text-uppercase mb-0 font-sans section-label-text">
                  The Agency
                </h6>
              </div>

              <h2 className="display-4 mb-4 text-dark font-cinzel about-heading">
                Redefining <br />
                <span className="font-serif text-logo-accent font-italic accent-italic">Interior Spaces</span>
              </h2>

              <p className="lead text-muted  font-sans about-description">
                With over a decade of experience, we specialize in designing and building luxurious residential homes and highly functional commercial workspaces that elevate your lifestyle and brand identity.
              </p>

              <Row className="mt-4 mb-2 g-4 border-top border-bottom py-4 about-stats-row">
                <Col sm={6}>
                  <div className="d-flex flex-column">
                    <h2 className="display-3 mb-2 font-cinzel stats-number">12+</h2>
                    <p className="mb-0 text-uppercase text-dark font-sans stats-label">Years of Excellence</p>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="d-flex flex-column">
                    <h2 className="display-3 mb-2 font-cinzel stats-number">500+</h2>
                    <p className="mb-0 text-uppercase text-dark font-sans stats-label">Projects Completed</p>
                  </div>
                </Col>
              </Row>

              <Link href="/about" className="text-decoration-none">
                <button
                  className="btn rounded-0 px-5 py-3 text-uppercase font-sans btn-outline-accent"
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
