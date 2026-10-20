import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="pt-5" style={{ backgroundColor: '#090c10', color: '#ffffff' }}>
      <Container className="pt-3 pb-4">
        <Row className="gy-5">
          <Col lg={4} className="pe-lg-4">
            <h3 className="fw-bold mb-3 font-cinzel">
              <span className="text-gradient">CS</span> India
            </h3>
            <p className="text-white-50 mb-4 font-sans" style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>
              Premier interior architecture and turnkey design-and-build firm delivering luxury corporate workspaces, tech headquarters, and bespoke residential sanctuaries across India.
            </p>
            <div className="d-flex gap-3">
              <a href="#" aria-label="Facebook" className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center text-white" style={{ width: '38px', height: '38px' }}>
                <FaFacebookF size={14} />
              </a>
              <a href="#" aria-label="Twitter" className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center text-white" style={{ width: '38px', height: '38px' }}>
                <FaTwitter size={14} />
              </a>
              <a href="#" aria-label="Instagram" className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center text-white" style={{ width: '38px', height: '38px' }}>
                <FaInstagram size={14} />
              </a>
              <a href="#" aria-label="LinkedIn" className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center text-white" style={{ width: '38px', height: '38px' }}>
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </Col>
          
          <Col lg={2} md={4} sm={6}>
            <h6 className="fw-bold mb-4 font-cinzel text-white text-uppercase" style={{ letterSpacing: '0.1em' }}>Navigation</h6>
            <ul className="list-unstyled text-white-50 lh-lg font-sans small">
              <li><Link href="/" className="text-decoration-none text-white-50 hover-text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-decoration-none text-white-50 hover-text-white transition-colors">About CS India</Link></li>
              <li><Link href="/services" className="text-decoration-none text-white-50 hover-text-white transition-colors">Turnkey Services</Link></li>
              <li><Link href="/projects" className="text-decoration-none text-white-50 hover-text-white transition-colors">Projects Portfolio</Link></li>
              <li><Link href="/technology" className="text-decoration-none text-white-50 hover-text-white transition-colors">Technology & BIM</Link></li>
              <li><Link href="/contact" className="text-decoration-none text-white-50 hover-text-white transition-colors">Contact Studios</Link></li>
            </ul>
          </Col>

          <Col lg={3} md={4} sm={6}>
            <h6 className="fw-bold mb-4 font-cinzel text-white text-uppercase" style={{ letterSpacing: '0.1em' }}>Capabilities</h6>
            <ul className="list-unstyled text-white-50 lh-lg font-sans small">
              <li>Corporate Office & Tech HQs</li>
              <li>Turnkey EPC & Civil Execution</li>
              <li>Ultra-Luxury Residential Villas</li>
              <li>Commercial Flagship Showrooms</li>
              <li>Custom Modular Joinery & Millwork</li>
              <li>Acoustic & MEP Engineering</li>
            </ul>
          </Col>

          <Col lg={3} md={4}>
            <h6 className="fw-bold mb-4 font-cinzel text-white text-uppercase" style={{ letterSpacing: '0.1em' }}>CS India Studios</h6>
            <div className="font-sans small text-white-50 d-flex flex-column gap-3">
              <div className="d-flex align-items-start gap-2">
                <FaMapMarkerAlt className="mt-1" style={{ color: 'var(--cs-lightblue)', flexShrink: 0 }} />
                <span>CS india Kolhapur City, Maharashtra</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaPhoneAlt style={{ color: 'var(--cs-lightblue)', flexShrink: 0 }} />
                <a href="tel:+919820045678" className="text-white-50 text-decoration-none">+91 0000000000</a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <FaEnvelope style={{ color: 'var(--cs-lightblue)', flexShrink: 0 }} />
                <a href="mailto:projects@csindia.com" className="text-white-50 text-decoration-none">projects@csindia.com</a>
              </div>
            </div>
          </Col>
        </Row>
        
        <hr className="mt-5 border-secondary" style={{ opacity: 0.2 }} />
        
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-white-50 pt-2 font-sans small">
          <p className="mb-2 mb-md-0">&copy; {new Date().getFullYear()} CS India Architecture & Turnkey Solutions. All rights reserved.</p>
          <p className="mb-0">Designed & Engineered for Architectural Excellence across India.</p>
        </div>
      </Container>
    </footer>
  );
}
