'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const projects = [
  { id: 1, title: 'Global Tech HQ', category: 'Office Interior', img: '/cs-india/FINAL2.jpg' },
  { id: 2, title: 'Urban Retail Space', category: 'Commercial', img: '/cs-india/NI%20Master%20Bedroom%20option2_01.jpg' },
  { id: 3, title: 'Boutique Hotel', category: 'Hospitality', img: '/cs-india/kitchen%20n_0022222_1.jpg' },
  { id: 4, title: 'Creative Studio', category: 'Workspace', img: '/cs-india/guest%20bedroom%2001.jpg' },
];

export default function FeaturedProjects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section id="projects" className="featured-projects-section" ref={containerRef}>
      <Container className="py-5 mb-3">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 pb-3">
          <div className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="d-flex align-items-center mb-3"
            >
              <div className="section-label-line"></div>
              <h6 className="text-uppercase mb-0 font-sans section-label-text">
                Portfolio
              </h6>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-4 text-dark font-cinzel mb-0"
            >
              Featured <span className="font-serif text-logo-accent font-italic accent-italic">Projects</span>
            </motion.h2>
          </div>
          <Link href="/projects" className="text-decoration-none">
            <motion.button
              whileHover={{ backgroundColor: 'var(--accent-color)', color: 'white' }}
              className="btn rounded-0 px-4 py-2 d-none d-md-block text-uppercase font-sans btn-outline-accent--sm"
            >
              View All Projects
            </motion.button>
          </Link>
        </div>

        <Row className="g-5 align-items-center">
          <Col md={6}>
            <div className="d-flex flex-column gap-5">
              {projects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  style={{ y: index === 0 ? y1 : 0, rotateX, rotateY }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="position-relative overflow-hidden group featured-project-card"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-100"
                    style={{
                      height: index === 0 ? '550px' : '450px',
                      background: `url(${project.img}) center/cover no-repeat`
                    }}
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 p-4 p-md-5 card-gradient-overlay">
                    <p className="font-sans mb-2 card-category">
                      {project.category}
                    </p>
                    <h5 className="text-white font-cinzel mb-0 card-title-lg">{project.title}</h5>
                  </div>
                </motion.div>
              ))}
            </div>
          </Col>

          <Col md={6}>
            <div className="d-flex flex-column gap-5 mt-5 pt-md-5">
              {projects.slice(2, 4).map((project, index) => (
                <motion.div
                  key={project.id}
                  style={{ y: y2, rotateX, rotateY }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="position-relative overflow-hidden group featured-project-card"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-100"
                    style={{
                      height: index === 0 ? '450px' : '550px',
                      background: `url(${project.img}) center/cover no-repeat`
                    }}
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 p-4 p-md-5 card-gradient-overlay">
                    <p className="font-sans mb-2 card-category">
                      {project.category}
                    </p>
                    <h5 className="text-white font-cinzel mb-0 card-title-lg">{project.title}</h5>
                  </div>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
