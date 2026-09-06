import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="pt-5 pb-4" style={{ backgroundColor: '#121212', color: '#ffffff' }}>
      <Container className="pt-4">
        <Row className="gy-5">
          <Col lg={4} className="pe-lg-5">
            <h3 className="fw-bold mb-4">
              <span className="text-gradient">CS</span> India
            </h3>
            <p className="text-white-50 mb-4">
              Premium commercial interior design agency specializing in modern, luxurious, and highly functional workspaces.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                <FaFacebookF />
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                <FaTwitter />
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                <FaInstagram />
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
          
          <Col lg={2} md={4} sm={6}>
            <h5 className="fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled text-white-50 lh-lg">
              <li><a href="#" className="text-decoration-none text-white-50 hover-text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-decoration-none text-white-50 hover-text-white transition-colors">About Us</a></li>
              <li><a href="#projects" className="text-decoration-none text-white-50 hover-text-white transition-colors">Portfolio</a></li>
              <li><a href="#services" className="text-decoration-none text-white-50 hover-text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-decoration-none text-white-50 hover-text-white transition-colors">Contact</a></li>
            </ul>
          </Col>

          <Col lg={3} md={4} sm={6}>
            <h5 className="fw-bold mb-4">Services</h5>
            <ul className="list-unstyled text-white-50 lh-lg">
              <li>Office Interior Design</li>
              <li>Commercial Spaces</li>
              <li>Retail Design</li>
              <li>Turnkey Projects</li>
              <li>Space Planning</li>
            </ul>
          </Col>

          <Col lg={3} md={4}>
            <h5 className="fw-bold mb-4">Newsletter</h5>
            <p className="text-white-50 mb-4">Subscribe to get the latest updates and design insights.</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control bg-transparent text-white border-secondary" placeholder="Your Email Address" />
              <button className="btn fw-bold px-3" style={{ backgroundColor: 'var(--accent-color)', color: '#121212' }}>
                Subscribe
              </button>
            </div>
          </Col>
        </Row>
        
        <hr className="mt-5 border-secondary" />
        
        <div className="text-center text-white-50 pt-3">
          <small>&copy; {new Date().getFullYear()} CS India Design. All rights reserved.</small>
        </div>
      </Container>
    </footer>
  );
}
