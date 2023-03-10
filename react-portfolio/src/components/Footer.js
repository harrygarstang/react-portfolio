import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="text-center py-3">
          <div className="d-flex justify-content-evenly align-items-center">
            <NavLink to="/" className="text-reset fw-bold border px-3 py-2">
              Home
            </NavLink>
            <NavLink to="/projects" className="text-reset fw-bold border px-3 py-2">
              Projects
            </NavLink>
            <NavLink to="/contact" className="text-reset fw-bold border px-3 py-2">
              Contact
            </NavLink>
          </div>
        </Col>
        <Col md="6" className="text-center py-3">
          <div className="d-flex justify-content-evenly align-items-center">
            <a href="https://github.com/harrygarstang" className="text-reset fw-bold border px-3 py-2">
              GitHub
            </a>
            <a href="mailto:harrygarstang2@gmail.com" className="text-reset fw-bold border px-3 py-2">
              harrygarstang2@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/harry-garstang/" className="text-reset fw-bold border px-3 py-2">
              LinkedIn
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
