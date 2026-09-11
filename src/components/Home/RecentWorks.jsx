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
    <section id="recent-works" className="" style={{ backgroundColor: 'var(--bg-light)' }}>
      <Container className="py-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 pb-3">
          <div className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="d-flex align-items-center mb-3"
            >
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-color)', marginRight: '15px' }}></div>
              <h6 className="text-uppercase mb-0 font-sans fw-bold" style={{ color: 'var(--accent-color)', letterSpacing: '0.2em', fontSize: '0.8rem' }}>
                Portfolio
              </h6>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="display-4 text-dark font-cinzel mb-0 fw-bold"
            >
              Recently <span className="font-serif text-logo-accent font-italic" style={{ fontStyle: 'italic', color: 'var(--cs-lightblue)' }}>Completed</span>
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
                className="btn font-sans text-uppercase px-0 pb-1"
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: filter === cat ? '2px solid var(--accent-color)' : '2px solid transparent',
                  color: filter === cat ? 'var(--text-dark)' : 'var(--text-muted)',
                  borderRadius: '0',
                  fontSize: '0.85rem',
                  letterSpacing: '0.1em',
                  fontWeight: filter === cat ? '600' : '400',
                  transition: 'all 0.3s ease'
                }}
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
                className="position-relative overflow-hidden group h-100"
                style={{ 
                  minHeight: '350px',
                  cursor: 'pointer' 
                }}
              >
                <div 
                  className="w-100 h-100 position-absolute top-0 start-0 transition-transform duration-700 ease-in-out group-hover-scale"
                  style={{
                    background: `url(${project.img}) center/cover no-repeat`,
                    transition: 'transform 0.7s ease'
                  }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                
                {/* Hover Overlay */}
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4 p-lg-5 overlay-hover"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.querySelector('.content-hover').style.transform = 'translateY(0)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.opacity = '0';
                    e.currentTarget.querySelector('.content-hover').style.transform = 'translateY(20px)';
                  }}
                >
                  <div 
                    className="content-hover"
                    style={{ transform: 'translateY(20px)', transition: 'transform 0.4s ease' }}
                  >
                    <p className="font-sans mb-2" style={{ color: 'var(--accent-color)', letterSpacing: '0.15em', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                      {project.category}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="text-white font-cinzel mb-0" style={{ fontSize: '1.8rem' }}>{project.title}</h4>
                      <Link href={`/projects/${project.id}`} className="text-white">
                        <div className="rounded-circle d-flex align-items-center justify-content-center border border-white" style={{ width: '40px', height: '40px', transition: 'all 0.3s' }}
                             onMouseOver={e => {e.currentTarget.style.backgroundColor='white'; e.currentTarget.style.color='black'}}
                             onMouseOut={e => {e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='white'}}
                        >
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
            <button 
              className="btn rounded-0 px-5 py-3 text-uppercase font-sans shadow-sm"
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
              Explore All Projects
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
