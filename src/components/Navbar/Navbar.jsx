'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
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

  // If not on homepage, always show dark background so white text is visible
  const isDarkBg = !isHome || scrolled;

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      fixed="top"
      className={`transition-all duration-300 ${isDarkBg ? 'bg-dark py-2 shadow-sm' : 'bg-transparent py-4'}`}
      style={{ transition: 'all 0.3s ease-in-out', backdropFilter: isDarkBg ? 'blur(10px)' : 'none' }}
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className="text-white fw-bold fs-3">
          <img src="/logo-old.png" alt="Flipspaces Logo" height={60}/>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className="border-0 shadow-none text-white"
        >
          {expanded ? <FaTimes size={24} color="#fff" /> : <FaBars size={24} color="#fff" />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} href="/" className="text-white fw-medium px-3 mx-1 nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} href="/about" className="text-white fw-medium px-3 mx-1 nav-link-custom">About Us</Nav.Link>
            <Nav.Link as={Link} href="/services" className="text-white fw-medium px-3 mx-1 nav-link-custom">Expertise</Nav.Link>
            <Nav.Link as={Link} href="/technology" className="text-white fw-medium px-3 mx-1 nav-link-custom">Technology</Nav.Link>

            <NavDropdown title={<span className="text-white fw-medium nav-link-custom">Work</span>} id="work-dropdown" className="px-2 mx-1">
              <NavDropdown.Item as={Link} href="/projects">All Projects</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/projects/commercial">Commercial</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/projects/workspace">Workspace</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span className="text-white fw-medium nav-link-custom">Insights</span>} id="insights-dropdown" className="px-2 mx-1">
              <NavDropdown.Item as={Link} href="/blogs">Blogs</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/case-studies">Case Studies</NavDropdown.Item>
            </NavDropdown>



            <Nav.Link as={Link} href="#contact" className="btn btn-primary rounded-pill px-4 py-2 ms-lg-3 mt-3 mt-lg-0 fw-bold" style={{ backgroundColor: 'var(--accent-color)', borderColor: 'var(--accent-color)' }}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
