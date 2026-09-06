'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function AppNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkBg = !isHome || scrolled;

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      fixed="top"
      className={`transition-all duration-500 ${isDarkBg ? 'py-3' : 'py-4'}`}
      style={{
        transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
        backgroundColor: isDarkBg ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isDarkBg ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isDarkBg ? 'blur(20px)' : 'none',
        borderBottom: isDarkBg ? '1px solid rgba(0, 0, 0, 0.05)' : '1px solid transparent',
        boxShadow: isDarkBg ? '0 4px 20px rgba(0,0,0,0.03)' : 'none'
      }}
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className="fw-bold d-flex align-items-center">
          <img src="/logo.png" alt="CS India Logo" height={60} className="me-2" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className="border-0 shadow-none"
        >
          {expanded ? <FaTimes size={24} color="var(--accent-color)" /> : <FaBars size={24} color="var(--accent-color)" />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} href="/" className={`px-3 mx-1 nav-link-custom ${isDarkBg ? 'text-dark' : 'text-white'}`}>Home</Nav.Link>
            <Nav.Link as={Link} href="/about" className={`px-3 mx-1 nav-link-custom ${isDarkBg ? 'text-dark' : 'text-white'}`}>About Us</Nav.Link>
            <Nav.Link as={Link} href="/services" className={`px-3 mx-1 nav-link-custom ${isDarkBg ? 'text-dark' : 'text-white'}`}>Expertise</Nav.Link>
            <Nav.Link as={Link} href="/technology" className={`px-3 mx-1 nav-link-custom ${isDarkBg ? 'text-dark' : 'text-white'}`}>Technology</Nav.Link>

            <NavDropdown title={<span className={`nav-link-custom ${isDarkBg ? 'text-dark' : 'text-white'}`}>Work</span>} id="work-dropdown" className="px-2 mx-1 nav-dropdown-custom">
              <NavDropdown.Item as={Link} href="/projects" className="font-sans text-dark py-2">All Projects</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/projects/commercial" className="font-sans text-dark py-2">Commercial</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/projects/workspace" className="font-sans text-dark py-2">Workspace</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span className={`nav-link-custom ${isDarkBg ? 'text-dark' : 'text-white'}`}>Insights</span>} id="insights-dropdown" className="px-2 mx-1 nav-dropdown-custom">
              <NavDropdown.Item as={Link} href="/blogs" className="font-sans text-dark py-2">Blogs</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/case-studies" className="font-sans text-dark py-2">Case Studies</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} href="#contact" className="ms-lg-4 mt-3 mt-lg-0" style={{ padding: 0 }}>
              <button 
                className="btn rounded-0 px-4 py-2 text-uppercase"
                style={{ 
                  backgroundColor: 'transparent',
                  border: '1px solid var(--accent-color)',
                  color: 'var(--accent-color)',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.1em',
                  fontSize: '0.85rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'var(--accent-color)';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'var(--accent-color)';
                }}
              >
                Contact Us
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
