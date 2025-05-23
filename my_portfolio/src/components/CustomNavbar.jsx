// Navbar.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar fixed-top">
      <Container>
        <Navbar.Brand href="#" className="logo">sukhman.singh.codes</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume/CV</Nav.Link>
            <Nav.Link href="#">Skills</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/sukhman012358/" className="social-icon"><FaLinkedin /></Nav.Link>
            <Nav.Link href="https://www.instagram.com/sukhman_saini30/" className="social-icon"><FaInstagram /></Nav.Link>
            <Nav.Link href="https://github.com/sukhman0345" className="social-icon"><FaGithub /></Nav.Link>
            <Nav.Link href="#" className="connect-btn">Let’s Connect</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
