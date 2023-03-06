import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

function Projects() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Card style={{ width: '100rem' }}>
            <Card.Img variant="top" src="../src/snowy-hills.jpg" />
            <Card.Body>
              <Card.Title>Coffee Curator</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card style={{ width: '100rem' }}>
            <Card.Img variant="top" src="../src/snowy-hills.jpg" />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card style={{ width: '100rem' }}>
            <Card.Img variant="top" src="../src/snowy-hills.jpg" />
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;