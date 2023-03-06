import React from "react";
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function About() {
  return (
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <div>
            <h1>
              <Badge bg="secondary" as="Button">
                A little bit more about me 🙂
              </Badge>
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
