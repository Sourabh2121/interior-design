'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const projects = [
  { id: 1, title: 'Global Tech HQ', category: 'Office Interior', img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80' },
  { id: 2, title: 'Urban Retail Space', category: 'Commercial', img: 'https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&q=80' },
  { id: 3, title: 'Boutique Hotel', category: 'Hospitality', img: 'https://images.unsplash.com/photo-1551882547-ff40eb0d1556?auto=format&fit=crop&q=80' },
  { id: 4, title: 'Creative Studio', category: 'Workspace', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80' },
];

export default function FeaturedProjects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="projects" className="py-5" ref={containerRef} style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-end mb-5">
          <div>
            <motion.h6
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-uppercase fw-bold" style={{ color: 'var(--accent-color)', letterSpacing: '2px' }}
            >
              Our Portfolio
            </motion.h6>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-4 fw-bold text-white mb-0"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
          </div>
          <Link href="/projects" className="text-decoration-none">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline-light rounded-pill px-4 py-2 d-none d-md-block"
            >
              View All Projects
            </motion.button>
          </Link>
        </div>

        <Row className="g-4 align-items-center mt-4">
          <Col md={6}>
            <div className="d-flex flex-column gap-4">
              {projects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  style={{ y: index === 0 ? y1 : 0 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="position-relative overflow-hidden rounded-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-100"
                    style={{
                      height: index === 0 ? '500px' : '400px',
                      background: `url(${project.img}) center/cover no-repeat`
                    }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 w-100 p-4"
                    style={{ background: 'var(--gradient-overlay)' }}
                  >
                    <h5 className="text-white fw-bold mb-1">{project.title}</h5>
                    <p className="text-white-50 mb-0">{project.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Col>

          <Col md={6}>
            <div className="d-flex flex-column gap-4 mt-5 mt-md-0">
              {projects.slice(2, 4).map((project, index) => (
                <motion.div
                  key={project.id}
                  style={{ y: y2 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="position-relative overflow-hidden rounded-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-100"
                    style={{
                      height: index === 0 ? '400px' : '500px',
                      background: `url(${project.img}) center/cover no-repeat`
                    }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 w-100 p-4"
                    style={{ background: 'var(--gradient-overlay)' }}
                  >
                    <h5 className="text-white fw-bold mb-1">{project.title}</h5>
                    <p className="text-white-50 mb-0">{project.category}</p>
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
