'use client';
import { Container } from 'react-bootstrap';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function VideoShowcase() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth parallax effect (moves the video slightly as you scroll)
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-5 overflow-hidden" style={{ backgroundColor: 'var(--primary-color)' }}>
      <Container className="py-5" ref={containerRef}>
        <div className="text-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="display-4 fw-bold text-white"
          >
            Experience The <span className="text-gradient">Transformation</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="position-relative w-100 rounded-5 overflow-hidden shadow-lg mx-auto"
          style={{ height: '70vh', maxWidth: '1200px', cursor: 'pointer' }}
          onClick={togglePlay}
        >
          {/* Video Player with Parallax */}
          <motion.div className="w-100 h-100 position-absolute top-0 start-0 z-0 bg-dark" style={{ y, scale: 1.2 }}>
            <video
              ref={videoRef}
              src="https://81673378.delivery.rocketcdn.me/wp-content/uploads/2026/05/Showcase-Video-30Th-Apr-No-White-Screen11.mp4"
              loop
              muted
              playsInline
              className="w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
          </motion.div>

          {/* Overlay with Glassmorphism Play Button */}
          <div className="position-absolute top-0 start-0 w-100 h-100 z-1 d-flex align-items-center justify-content-center" style={{ backgroundColor: isPlaying ? 'transparent' : 'rgba(11, 31, 51, 0.4)', transition: 'background-color 0.5s' }}>
            <motion.div
              initial={false}
              animate={{ scale: isPlaying ? 0 : 1, opacity: isPlaying ? 0 : 1 }}
              whileHover={{ scale: 1.1 }}
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                color: 'var(--white-color)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <FaPlay size={36} className="ms-2" />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
