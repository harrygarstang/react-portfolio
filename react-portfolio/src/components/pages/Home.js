import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import avatar from '../images/profile.jpg';

function Home() {
  return (
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <div className="home">
            <div className="home-container">
              <Image src={avatar} roundedCircle className="home-avatar home-img" />
              <h1>Harry Garstang</h1>
              <p>
                Front-End Developer | Web Design
              </p>
              <Link to="projects" role="button" className="btn btn-primary" style={{ backgroundColor: 'blue', color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', borderRadius: '10px', padding: '10px 20px' }}>
                View My Work
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

  );
}

export default Home;