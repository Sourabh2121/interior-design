'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const projects = [
  { id: 1, title: 'Modern Workspace', category: 'Commercial', img: '/cs-india/2602%20D1.png', size: 'large' },
  { id: 2, title: 'Urban Loft', category: 'Residential', img: '/cs-india/MASTER%201.jpg', size: 'small' },
  { id: 3, title: 'Boutique Hotel', category: 'Hospitality', img: '/cs-india/IMG-0104.PNG', size: 'small' },
  { id: 4, title: 'Corporate HQ', category: 'Commercial', img: '/cs-india/IMG-0106.PNG', size: 'large' },
  { id: 5, title: 'Luxury Villa', category: 'Residential', img: '/cs-india/Parents%20Bedroom_01_4.jpg', size: 'small' },
  { id: 6, title: 'Tech Startup', category: 'Workspace', img: '/cs-india/M1.jpg', size: 'small' },
];

export default function RecentWorks() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Commercial', 'Residential', 'Hospitality'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="recent-works" className="recent-works-section">
      <Container className="py-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 pb-3">
          <div className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="d-flex align-items-center mb-3"
            >
              <div className="section-label-line section-label-line--40"></div>
              <h6 className="text-uppercase mb-0 font-sans fw-bold section-label-text">
                Portfolio
              </h6>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-4 text-dark font-cinzel mb-0 fw-bold"
            >
              Recently <span className="font-serif text-logo-accent font-italic accent-italic">Completed</span>
            </motion.h2>
          </div>

          {/* Filters */}
          <motion.div
            className="d-flex flex-wrap gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn font-sans text-uppercase px-0 pb-1 filter-btn ${filter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <Row className="g-3">
          {filteredProjects.map((project, index) => (
            <Col lg={project.size === 'large' ? 8 : 4} md={6} key={project.id}>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="position-relative overflow-hidden group h-100 recent-work-card"
              >
                <div
                  className="w-100 h-100 position-absolute top-0 start-0 recent-work-image"
                  style={{
                    background: `url(${project.img}) center/cover no-repeat`
                  }}
                />

                {/* Hover Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4 p-lg-5 recent-work-overlay">
                  <div className="recent-work-content">
                    <p className="font-sans mb-2 card-category">
                      {project.category}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="text-white font-cinzel mb-0 card-title-lg">{project.title}</h4>
                      <Link href={`/projects/${project.id}`} className="text-white">
                        <div className="rounded-circle d-flex align-items-center justify-content-center border border-white recent-work-arrow">
                          <FaArrowRight size={14} />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-3 pt-4">
          <Link href="/projects" className="text-decoration-none">
            <button className="btn rounded-0 px-5 py-3 text-uppercase font-sans shadow-sm btn-outline-accent">
              Explore All Projects
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
