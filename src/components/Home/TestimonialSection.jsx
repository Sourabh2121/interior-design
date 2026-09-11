'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CEO, TechFlow Inc.',
    content: 'The team transformed our barren office into a vibrant, intelligent workspace. Their attention to luxury and detail is unmatched in the industry.',
    img: '/cs-india/399.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Director, Urban Boutiques',
    content: 'Our retail spaces have seen a 40% increase in footfall since the redesign. They truly understand how spatial flow impacts customer experience.',
    img: '/cs-india/106.jpg'
  },
  {
    id: 3,
    name: 'Eleanor Vance',
    role: 'Homeowner',
    content: 'They delivered a residential project that feels like a five-star hotel. From the lighting to the textures, everything exudes premium quality.',
    img: '/cs-india/400.jpg'
  }
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((active + 1) % testimonials.length);
  const prev = () => setActive((active - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="" style={{ backgroundColor: 'var(--bg-dark)' }}>
      <Container className="py-5 mt-4">
        <Row className="align-items-center">
          <Col lg={4} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="d-flex align-items-center mb-3">
                <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--accent-color)', marginRight: '10px' }}></div>
                <h6 className="text-uppercase mb-0 font-sans" style={{ color: 'var(--accent-color)', letterSpacing: '0.2em', fontSize: '0.8rem' }}>
                  Testimonials
                </h6>
              </div>
              <h2 className="display-4 text-dark font-cinzel mb-4">
                Client <span className="font-serif text-logo-accent font-italic" style={{ fontStyle: 'italic', color: 'var(--cs-lightblue)' }}>Stories</span>
              </h2>
              <p className="text-muted font-sans mb-4" style={{ fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.6 }}>
                Hear from our partners about how our design philosophy has impacted their spaces.
              </p>

              <div className="d-flex gap-3">
                <button
                  onClick={prev}
                  className="btn rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '50px', height: '50px', border: '1px solid rgba(3, 169, 244, 0.5)', color: 'var(--accent-color)', backgroundColor: 'transparent', transition: 'all 0.3s' }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-color)'; e.currentTarget.style.color = 'var(--bg-dark)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent-color)'; }}
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={next}
                  className="btn rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '50px', height: '50px', border: '1px solid rgba(3, 169, 244, 0.5)', color: 'var(--accent-color)', backgroundColor: 'transparent', transition: 'all 0.3s' }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-color)'; e.currentTarget.style.color = 'var(--bg-dark)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent-color)'; }}
                >
                  <FaChevronRight />
                </button>
              </div>
            </motion.div>
          </Col>

          <Col lg={7} className="offset-lg-1">
            <div className="position-relative">
              <FaQuoteLeft className="position-absolute" style={{ color: 'rgba(3, 169, 244, 0.1)', fontSize: '120px', top: '-40px', left: '-20px', zIndex: 0 }} />

              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="position-relative z-1 px-4 py-3 luxury-card"
              >
                <p className="lead text-dark mb-5 font-sans" style={{ fontSize: '1.25rem', lineHeight: 1.8, fontStyle: 'italic', fontWeight: 300 }}>
                  "{testimonials[active].content}"
                </p>

                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle overflow-hidden me-4"
                    style={{ width: '70px', height: '70px', border: '2px solid var(--accent-color)' }}
                  >
                    <img src={testimonials[active].img} alt={testimonials[active].name} className="w-100 h-100 object-fit-cover" />
                  </div>
                  <div>
                    <h5 className="font-cinzel text-dark mb-1">{testimonials[active].name}</h5>
                    <p className="font-sans mb-0" style={{ color: 'var(--text-dark)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7 }}>
                      {testimonials[active].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
