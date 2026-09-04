'use client';
import ParticlesBackground from '../../components/Home/ParticlesBackground';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ParticlesPage() {
  return (
    <main className="position-relative vh-100 d-flex align-items-center justify-content-center overflow-hidden bg-dark">
      <ParticlesBackground />
      <div className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none" style={{ backgroundColor: 'rgba(11, 31, 51, 0.4)' }}></div>
      
      <div className="position-relative z-1 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="display-3 text-white fw-bold mb-4"
        >
          Interactive <span className="text-gradient">3D Experience</span>
        </motion.h1>
        <p className="text-white-50 lead mb-5">Move your mouse to interact with the particle network.</p>
        
        <Link href="/" className="text-decoration-none">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold glassmorphism"
          >
            Back to Home
          </motion.button>
        </Link>
      </div>
    </main>
  );
}
