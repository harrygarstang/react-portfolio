import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import projectsData from './projectsData.json';
import './Projects.css';

function Projects() {
  return (
    <div>
      <Container className="projects-container">
        <Row>
          {projectsData.map(project => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              codeLink={project.codeLink}
              deployLink={project.deployLink}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

function Project(props) {
  return (
    <Card className="project-card col-md-4">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <a href={props.codeLink} className="btn btn-primary">View Code</a>
        <a href={props.deployLink} className="btn btn-secondary">View Deployed Application</a>
      </Card.Body>
    </Card>
  );
}

export default Projects;