'use client';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Corporate Workspace',
    area: '5,000 - 20,000 sq ft',
    city: 'Mumbai',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#0e1117', color: '#ffffff', position: 'relative' }}>
      <Container className="py-5">
        {/* Section Header */}
        <div className="text-center pb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="section-label-line"></div>
              <h6 className="text-uppercase mb-0 font-sans section-label-text" style={{ color: 'var(--cs-lightblue)' }}>
                Start A Conversation
              </h6>
              <div className="section-label-line section-label-line--right"></div>
            </div>

            <h2 className="display-4 font-cinzel text-white mb-3">
              Connect With <span className="font-serif text-logo-accent font-italic accent-italic">CS India</span>
            </h2>
            <p className="lead text-white-50 mx-auto font-sans" style={{ maxWidth: '650px', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Whether you are planning a cutting-edge corporate headquarters, a turnkey commercial fit-out, or an ultra-luxury residence, our team of architects and project directors is ready to bring your vision to life.
            </p>
          </motion.div>
        </div>

        <Row className="g-5 align-items-stretch">
          {/* Contact Details & Studios */}
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-100 p-4 p-md-5 rounded-4 d-flex flex-column justify-content-between"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div>
                <h4 className="font-cinzel text-white mb-4">CS India Design Studios</h4>
                <p className="text-white-50 font-sans mb-4" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                  With multidisciplinary studios and state-of-the-art turnkey project management teams across India, we deliver excellence from bare-shell to handover.
                </p>

                <div className="d-flex flex-column gap-4 mb-5">
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(3, 169, 244, 0.1)', color: 'var(--cs-lightblue)' }}>
                      <FaMapMarkerAlt size={18} />
                    </div>
                    <div>
                      <h6 className="text-white mb-1 font-sans fw-bold">Corporate Headquarters</h6>
                      <p className="text-white-50 mb-0 font-sans small">
                        Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051
                      </p>
                      <p className="text-white-50 mb-0 font-sans small mt-1">
                        Regional Studios in Gurugram (Delhi NCR) & Indiranagar (Bengaluru)
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(3, 169, 244, 0.1)', color: 'var(--cs-lightblue)' }}>
                      <FaPhoneAlt size={18} />
                    </div>
                    <div>
                      <h6 className="text-white mb-1 font-sans fw-bold">Direct Consultation Line</h6>
                      <p className="text-white-50 mb-0 font-sans small">
                        <a href="tel:+919820045678" className="text-white-50 text-decoration-none hover-text-white">+91 98200 45678</a>
                      </p>
                      <p className="text-white-50 mb-0 font-sans small">
                        <a href="tel:+912261234500" className="text-white-50 text-decoration-none hover-text-white">+91 22 6123 4500</a>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(3, 169, 244, 0.1)', color: 'var(--cs-lightblue)' }}>
                      <FaEnvelope size={18} />
                    </div>
                    <div>
                      <h6 className="text-white mb-1 font-sans fw-bold">Email Inquiries</h6>
                      <p className="text-white-50 mb-0 font-sans small">
                        <a href="mailto:projects@csindia.com" className="text-white-50 text-decoration-none hover-text-white">projects@csindia.com</a>
                      </p>
                      <p className="text-white-50 mb-0 font-sans small">
                        <a href="mailto:contact@csindia.com" className="text-white-50 text-decoration-none hover-text-white">contact@csindia.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div className="p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(3, 169, 244, 0.1)', color: 'var(--cs-lightblue)' }}>
                      <FaClock size={18} />
                    </div>
                    <div>
                      <h6 className="text-white mb-1 font-sans fw-bold">Studio Consultation Hours</h6>
                      <p className="text-white-50 mb-0 font-sans small">
                        Monday – Saturday: 9:30 AM – 7:30 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-top border-secondary">
                <small className="text-white-50 font-sans">
                  CS India delivers end-to-end turnkey architectural & interior solutions with 100% on-time completion guarantee.
                </small>
              </div>
            </motion.div>
          </Col>

          {/* Interactive Consultation Form */}
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-4 p-md-5 rounded-4 h-100"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {submitted ? (
                <div className="py-5 text-center my-auto">
                  <FaCheckCircle size={64} style={{ color: 'var(--cs-lightblue)' }} className="mb-4" />
                  <h3 className="font-cinzel text-white mb-3">Inquiry Received by CS India</h3>
                  <p className="text-white-50 font-sans lead mb-4" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                    Thank you, {formData.name || 'valued partner'}. Our Principal Architect & Turnkey Project Director will review your specifications and contact you within 24 business hours to schedule an initial consultation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn px-4 py-2 rounded-0 font-sans text-uppercase"
                    style={{ backgroundColor: 'var(--cs-lightblue)', color: '#000', fontWeight: 600 }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h4 className="font-cinzel text-white mb-2">Request A Project Consultation</h4>
                  <p className="text-white-50 font-sans mb-4 small">
                    Fill out the form below to receive a bespoke concept presentation and turnkey cost estimation.
                  </p>

                  <Row className="g-3">
                    <Col md={6}>
                      <div className="form-group mb-3">
                        <label className="text-white-50 font-sans small mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          className="form-control bg-transparent text-white border-secondary rounded-0 py-2"
                          placeholder="e.g. Vikram Singhania"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="form-group mb-3">
                        <label className="text-white-50 font-sans small mb-1">Business Email *</label>
                        <input
                          type="email"
                          required
                          className="form-control bg-transparent text-white border-secondary rounded-0 py-2"
                          placeholder="vikram@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="form-group mb-3">
                        <label className="text-white-50 font-sans small mb-1">Contact Phone *</label>
                        <input
                          type="tel"
                          required
                          className="form-control bg-transparent text-white border-secondary rounded-0 py-2"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="form-group mb-3">
                        <label className="text-white-50 font-sans small mb-1">City / Location *</label>
                        <input
                          type="text"
                          required
                          className="form-control bg-transparent text-white border-secondary rounded-0 py-2"
                          placeholder="e.g. Mumbai, Bengaluru, Delhi NCR"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="form-group mb-3">
                        <label className="text-white-50 font-sans small mb-1">Project Typology *</label>
                        <select
                          className="form-select bg-dark text-white border-secondary rounded-0 py-2"
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        >
                          <option value="Corporate Workspace">Corporate & Tech Office Fitout</option>
                          <option value="Turnkey Commercial">Turnkey Design & Build</option>
                          <option value="Luxury Residential">Luxury Penthouse / Villa</option>
                          <option value="Retail & Showroom">Flagship Retail / Showroom</option>
                          <option value="Hospitality">Boutique Hospitality & Dining</option>
                        </select>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="form-group mb-3">
                        <label className="text-white-50 font-sans small mb-1">Estimated Area (Sq. Ft.) *</label>
                        <select
                          className="form-select bg-dark text-white border-secondary rounded-0 py-2"
                          value={formData.area}
                          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        >
                          <option value="Under 3,000 sq ft">Under 3,000 sq ft</option>
                          <option value="3,000 - 10,000 sq ft">3,000 - 10,000 sq ft</option>
                          <option value="10,000 - 30,000 sq ft">10,000 - 30,000 sq ft</option>
                          <option value="30,000+ sq ft">30,000+ sq ft (Enterprise Scale)</option>
                        </select>
                      </div>
                    </Col>

                    <Col xs={12}>
                      <div className="form-group mb-4">
                        <label className="text-white-50 font-sans small mb-1">Project Details & Requirements</label>
                        <textarea
                          rows={4}
                          className="form-control bg-transparent text-white border-secondary rounded-0 py-2"
                          placeholder="Tell CS India about your project goals, design aspirations, target move-in date..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                      </div>
                    </Col>

                    <Col xs={12}>
                      <button
                        type="submit"
                        className="btn w-100 py-3 rounded-0 font-sans text-uppercase text-dark fw-bold transition-all"
                        style={{
                          backgroundColor: 'var(--cs-lightblue)',
                          letterSpacing: '0.15em',
                          border: 'none'
                        }}
                      >
                        Submit Consultation Request to CS India
                      </button>
                    </Col>
                  </Row>
                </form>
              )}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
