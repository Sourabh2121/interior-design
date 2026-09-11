'use client';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle, bgImage }) {
  return (
    <section 
      className="position-relative d-flex align-items-center justify-content-center overflow-hidden"
      style={{ 
        height: '40vh', 
        minHeight: '300px',
        backgroundColor: 'var(--bg-dark)',
        marginTop: 0 // removed top margin since it sits under the transparent navbar
      }}
    >
      {/* Background Image with Overlay */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 z-0"
        style={{
          backgroundImage: `url(${bgImage || '/cs-india/IMG-0108.PNG'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // slight parallax
        }}
      ></div>
      
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 z-1"
        style={{ 
          background: 'linear-gradient(to right, rgba(11, 31, 51, 0.9), rgba(11, 31, 51, 0.6))' 
        }}
      ></div>

      <Container className="position-relative z-2 text-center text-md-start pt-5 mt-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="display-4 fw-bold text-white mb-3"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lead text-white-50 mb-0"
            style={{ maxWidth: '600px' }}
          >
            {subtitle}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
