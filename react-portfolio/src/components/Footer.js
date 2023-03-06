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
            <NavLink to="/about" className="text-reset fw-bold border px-3 py-2">
              About Me
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
            <a href="https://github.com/yourusername" className="text-reset fw-bold border px-3 py-2">
              GitHub
            </a>
            <a href="mailto:youremail@example.com" className="text-reset fw-bold border px-3 py-2">
              Email
            </a>
            <a href="https://www.linkedin.com/in/yourusername" className="text-reset fw-bold border px-3 py-2">
              LinkedIn
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
{/* <footer>
      <div className="footer-left">
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-right">
        <ul>
          <li>
            <a href="https://github.com/harrygarstang">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/harry-garstang/">LinkedIn</a>
          </li>
          <li>
            <a href="mailto:harrygarstang2@gmail.com">harrygarstang2@gmail.com</a>
          </li>
        </ul>
      </div>
    </footer> */}