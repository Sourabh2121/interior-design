'use client';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaAward, FaBuilding, FaCheckDouble, FaSmile } from 'react-icons/fa';

export default function ClientsBanner() {
  const stats = [
    { id: 1, number: '500+', label: 'Turnkey Projects Delivered', icon: <FaBuilding size={24} /> },
    { id: 2, number: '1.5M+', label: 'Sq. Ft. Designed Across India', icon: <FaCheckDouble size={24} /> },
    { id: 3, number: '98%', label: 'On-Time Handover Record', icon: <FaAward size={24} /> },
    { id: 4, number: '99%', label: 'Client Retention & Satisfaction', icon: <FaSmile size={24} /> }
  ];

  const sectors = [
    'Technology & Global HQs',
    'Financial Services & Fintech',
    'Luxury Residential Penthouses',
    'Boutique Hospitality & Lounges',
    'High-End Retail & Showrooms',
    'Healthcare & Wellness Facilities'
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#fcfcfc', borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
      <Container>
        {/* Impact Numbers */}
        <Row className="g-4 mb-5">
          {stats.map((stat, i) => (
            <Col lg={3} sm={6} key={stat.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-4 text-center bg-white rounded-3 h-100 shadow-sm border"
              >
                <div className="mb-3 d-inline-block p-3 rounded-circle" style={{ backgroundColor: 'rgba(3, 169, 244, 0.1)', color: 'var(--cs-lightblue)' }}>
                  {stat.icon}
                </div>
                <h3 className="display-5 font-cinzel fw-bold mb-1" style={{ color: 'var(--text-dark)' }}>
                  {stat.number}
                </h3>
                <p className="font-sans mb-0 text-muted small text-uppercase fw-semibold" style={{ letterSpacing: '0.05em' }}>
                  {stat.label}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Sectors Served Bar */}
        <div className="text-center pt-2">
          <p className="font-sans text-uppercase small text-muted mb-3" style={{ letterSpacing: '0.2em' }}>
            CS India Delivers Bespoke Turnkey Architecture Across Key Sectors
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {sectors.map((sector, index) => (
              <span
                key={index}
                className="badge px-3 py-2 font-sans fw-normal text-dark border bg-white rounded-pill shadow-xs"
                style={{ fontSize: '0.85rem' }}
              >
                ✓ {sector}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
