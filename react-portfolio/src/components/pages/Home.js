import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <div className="home">
            <div className="home-container">
              <h1>Harry Garstang</h1>
              <p>
                Front-End Developer
              </p>
              <Link to="projects" role="button" className="btn btn-link">
                Take a look at some of my projects.
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

  );
}

export default Home;